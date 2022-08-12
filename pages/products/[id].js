import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { getProduct } from "../../api";
import useGlobalFetch from "../../hooks/useGlobalFetch";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useGlobalFetch(`/products/${id}`, getProduct, id);
  const { description, avatar, price, name } = data?.product || {};

  return (
    <div>
      <Head>
        <title>Product Detail</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='m-8 lg:m-16 lg:ml-60 lg:mr-60'>
        <div className=''>
          <div className='flex'>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
              <img
                src={avatar}
                className="className='p-8 rounded-t-lg object-contain w-80 h-60'"
              ></img>
            )}
            <div className='pl-12 flex flex-col'>
              <h1 className='text-3xl font-bold pb-8'>{name}</h1>
              {!isLoading && (
                <span className='text-2xl lg:text-3xl   text-gray-900 dark:text-white'>
                  ${price}
                </span>
              )}
            </div>
          </div>
          <hr className='mt-12 mb-12'></hr>
          <h2 className='text-3xl font-bold mb-12'>Description</h2>
          <p>{description}</p>
        </div>
      </main>
    </div>
  );
}
