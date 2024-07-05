import { NextRequest, NextResponse } from "next/server";
import { db, projects } from "../../../drizzle";
import { desc } from "drizzle-orm";

export const GET = async (req: NextRequest) => {
  const data = await db
    .select()
    .from(projects)
    .orderBy(desc(projects.createdAt));
  return NextResponse.json(data);
};
