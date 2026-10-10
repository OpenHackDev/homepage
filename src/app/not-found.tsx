import { BaseOhHeader } from '@/components/interaction/header/BaseOhHeader';
import { ColumnLayout } from '@/components/interaction/layout/ColumnLayout';
import Link from 'next/link'

export default function NotFound() {
    return (
        <ColumnLayout className="">
            <BaseOhHeader/>
            <div className="relative p-2 h-auto w-full flex flex-col items-center justify-center">
                <h1 className="text-2xl"><b>404</b></h1>
                <h2 className="text-"><b>Page Not Found</b></h2>
                <h2>Hmmm, it seems that page doesn't exist right now.</h2>
                <Link className="underline" href="/">Return Home</Link>
            </div>
        </ColumnLayout>
    )
}