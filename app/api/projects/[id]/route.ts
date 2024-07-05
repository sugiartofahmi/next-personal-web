import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { db, projects } from "@/drizzle";
import { eq } from "drizzle-orm";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const id = String(context.params.id) || "";

  const data = await db.query.projects.findFirst({
    where: eq(projects.id, id),
  });

  return NextResponse.json(data);
};
