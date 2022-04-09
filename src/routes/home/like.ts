import prisma from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const id = +form.get('id')

  const liked = await prisma.liked.count({
    where: { tweetId: id}
  })

  if (liked === 1) {
    await prisma.liked.delete({ where: { tweetId: id } })
    
    const count = await prisma.tweet.findUnique({
      where: { id },
      select: { likes: true}
    })

    await prisma.tweet.update({
      where: { id },
      data: { likes: (count.likes -= 1)}
    })

    return {
      status: 303,
      headers: { location: '/home' }
    }
  }

  await prisma.liked.create({
    data: {
      tweetId: id,
      user: { connect: { id: 1 }}
    }
  })

  const count = await prisma.tweet.findUnique({
    where: { id },
    select: { likes: true}
  })

  await prisma.tweet.update({
    where: { id },
    data: { likes: count.likes += 1 }
  })

  return {
    status: 303,
    headers: { location: '/home'}
  }
}