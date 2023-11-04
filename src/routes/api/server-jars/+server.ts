import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import info from "$lib/server-jars.json"

export const GET = (async () => {
	return json(info.map((item) => item.platform))
}) satisfies RequestHandler