import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: { slug: string } }
) => {
  const slug = String(context.params.slug) || "";

  const projects = await prisma.projects.findFirst({
    where: {
      slug,
    },
  });

  return NextResponse.json({ ...projects });
};
