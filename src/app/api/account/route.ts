import { authOptions } from '@lib/auth.lib';
import { DeleteAccountApiResponse } from '@typedefs/api.types';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';
import prisma from '@lib/database.lib';

export const DELETE = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      const data: DeleteAccountApiResponse = {
        error: 'Unauthorized',
        success: false,
      };
      return NextResponse.json(data, { status: 403 });
    }

    await prisma.user.delete({
      where: {
        email: session.user.email!,
      },
    });

    const csrfUrl = new URL('/api/auth/csrf', process.env.NEXT_PUBLIC_URL);

    const csrfResponse = await axios.get(csrfUrl.toString());
    const { data: csrfData } = csrfResponse;

    const signoutUrl = new URL('/api/auth/signout', process.env.NEXT_PUBLIC_URL);

    await axios.post(signoutUrl.toString(), {
      csrfToken: csrfData.csrfToken,
    });

    const data: DeleteAccountApiResponse = {
      success: true,
    };

    cookies().delete('next-auth.session-token');

    return NextResponse.json(data);
  } catch (err) {
    return new NextResponse('Internal Error', { status: 500 });
  }
};
