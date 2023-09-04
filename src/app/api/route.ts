import { NextResponse } from "next/server";
import { OneClient } from "@superfaceai/one-sdk/node";

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const client = new OneClient();
  const profile = await client.getProfile('example');
  const result = await profile.getUseCase('Example').perform(null, { provider: 'noop' });

  return NextResponse.json({ result });
}