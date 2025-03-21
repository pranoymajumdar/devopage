import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/server/auth";
import { prisma } from "@/server/prisma";

export const GET = async (_: NextRequest, __: NextResponse) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session)
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 },
    );

  const profile = await prisma.profile.findFirst({
    where: {
      userId: session.user.id,
    },
  });
  return NextResponse.json(profile);
};
