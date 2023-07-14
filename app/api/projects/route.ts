import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const projects = await prisma.projects.findMany({});
  return NextResponse.json({ projects });
};

export const POST = async (req: NextRequest) => {
  const payload = await req.json();

  const project = await prisma.projects.create({
    data: {
      ...payload,
    },
  });

  return NextResponse.json({ ...project });
};
