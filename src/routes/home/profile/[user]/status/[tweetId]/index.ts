import type { RequestHandler } from '@sveltejs/kit'

import { getTweet } from '$lib/utils/prisma'

export const get: RequestHandler = async ({ params }) => {
	const tweet = await getTweet(params)

	if (!tweet) {
		return { status: 400 }
	}

	return {
		status: 200,
		body: { tweet }
	}
}
