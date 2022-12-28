import type { RequestHandler } from "./$types";
import fs from 'fs';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
    const buffer = fs.readFileSync(`./src/lib/posts/${params.slug}/${params.file}`);
    return new Response(buffer)
}