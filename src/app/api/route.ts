import { NextResponse } from "next/server";
import { OneClient } from "@superfaceai/one-sdk/node";

export async function GET(req: Request) {
  const client = new OneClient();
  const profile = await client.getProfile('example');
  const result = await profile.getUseCase('Example').perform(null, { provider: 'noop' });

  return NextResponse.json({ result });
}