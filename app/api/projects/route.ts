import { NextRequest, NextResponse } from "next/server";
import { db, projects } from "../../../drizzle";

export const GET = async (req: NextRequest) => {
  const data = await db.select().from(projects);
  return NextResponse.json(data);
};
