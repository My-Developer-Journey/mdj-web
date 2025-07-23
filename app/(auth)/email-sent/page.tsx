'use client';

import { Suspense } from 'react';
import EmailSentPageWrapper from '../../components/EmailSendPageWrapper';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <EmailSentPageWrapper />
        </Suspense>
    );
}
