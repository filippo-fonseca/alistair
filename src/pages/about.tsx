import {toWords} from 'number-to-words';
import React, {useState} from 'react';
import {Consts} from '../core/consts';
import day from 'dayjs';
import Link from 'next/link';
import {Layout} from '../layouts/Layout';
import {Activity} from '../components/activity';

import {FiMail, FiGithub} from 'react-icons/fi';
import {FaDiscord} from 'react-icons/fa';

const birthday = day('2 November 2004').toDate();
const age = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);

export default function About() {
  return (
    <div className="bg-gray-900 bg-opacity-50 h-full">
      <Layout>
        <Link href="/">Back</Link>
        <div className="flex-1 flex h-full justify-center items-center">
          <div className="glass overflow-hidden p-5 w-96 space-y-2">
            <h1 className="text-3xl font-bold title">Alistair Smith</h1>
            <p>
              Hey, I'm a {toWords(age)} year old full-stack TypeScript engineer from the United Kingdom. I have a huge passion for
              creating and supporting open-source software, desktop & mobile applications, and responsive, performant code.
              Programming since seven, I've learned a lot about programming principles, scaling, and systems architecture. I
              consider myself forward-thinking and I always love to have a joke around.
            </p>
            <div className="flex items-center">
              <img src="/me.png" alt="Me" className="h-20 rounded-md" />
              <div className="flex justify-between flex-col py-4 pl-6 space-y-1">
                <DiscordContactRow />
                <a href="mailto:inbox@alistair.cloud" className="flex items-center space-x-3">
                  <FiMail /> <span>inbox@alistair.cloud</span>
                </a>
                <a href="https://github.com/alii" className="flex items-center space-x-3">
                  <FiGithub /> <span>alii</span>
                </a>
              </div>
            </div>
            <Activity />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const DiscordContactRow = () => {
  const [message, setMessage] = useState(Consts.DiscordUsername);

  const copy = async () => {
    await navigator.clipboard.writeText(Consts.DiscordUsername);
    setMessage('Copied ✔');
    await new Promise((r) => setTimeout(r, 1500));
    setMessage(Consts.DiscordUsername);
  };

  return (
    <a href="#" onClick={copy} className="flex items-center space-x-3">
      <FaDiscord /> <span>{message}</span>
    </a>
  );
};
