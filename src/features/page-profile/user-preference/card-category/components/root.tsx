'use client'
import React, { useState } from 'react'

export function Root({ children }: { children: React.ReactNode }) {

    return (
        <section className='flex w-full shrink-0 flex-col'>
            {children}
        </section>
    )
}
