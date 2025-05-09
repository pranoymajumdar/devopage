import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { tryCatch } from '@/common/utils/try-catch.utils';
import { SignUpDto } from '../auth/dtos';
import { SessionService } from '@/common/services/session.service';

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly sessionService: SessionService,
  ) {}

  /**
   * Create a new user
   * @param dto - containing user details
   * @returns Created user
   */
  async create(dto: SignUpDto): Promise<User> {
    const user = this.usersRepository.create({
      name: dto.name,
      email: dto.email,
      username: dto.username,
      password: dto.password,
    });
    const result = await tryCatch(this.usersRepository.save(user));

    if (result.error) {
      this.logger.error('Error creating user', result.error);
      throw new InternalServerErrorException(
        'An error occurred while creating the user, please try again later.',
      );
    }
    return result.data;
  }

  /**
   * Find a user by their ID
   * @param id - The ID of the user to find
   * @returns The user if found, null otherwise
   */
  async findById(id: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  /**
   * Find a user by their email
   * @param email - The email of the user to find
   * @returns The user if found, null otherwise
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  /**
   * Find a user by their username
   * @param username - The username of the user to find
   * @returns The user if found, null otherwise
   */
  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  /**
   * Mark a user's email as verified
   * @param userId - The ID of the user to mark as verified
   */
  async markEmailAsVerified(userId: string): Promise<void> {
    const user = await this.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.isEmailVerified = true;
    await this.usersRepository.save(user);
  }

  /**
   * Update a user's password
   * @param userId - The ID of the user whose password is being updated
   * @param newPassword - The new password to set for the user
   */
  async updatePassword(userId: string, newPassword: string): Promise<void> {
    const user = await this.findById(userId);
    if (!user) {
      throw new NotFoundException('Invalid or expired password reset token.');
    }
    user.password = newPassword;
    await this.usersRepository.save(user);
  }

  /**
   * Get all the users
   * @returns An array of users.
   */
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
