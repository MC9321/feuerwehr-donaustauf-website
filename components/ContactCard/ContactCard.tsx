import Image from 'next/image';
import { JSX } from 'react';

interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  phone?: string;
  imageSrc: string;
  street?: string;
  town?: string;
}

function ContactCard(props: Readonly<ContactCardProps>): JSX.Element {
  const { name, role, email, phone, imageSrc, street, town } = props;

  let emailSplit;
  if (email) {
    emailSplit = email.split('@');
  }

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-gray-300 bg-gray-100 p-6 shadow-lg backdrop-blur-xs transition-all duration-200 hover:scale-105 hover:backdrop-blur-sm supports-backdrop-filter:bg-gray-400/20 dark:border-gray-700 dark:bg-gray-800 supports-backdrop-filter:dark:bg-gray-500/20">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="shrink-0">
          <Image src={imageSrc} alt={name} width={120} height={120} className="rounded-full border border-white/30 object-cover dark:border-white/30" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{role}</p>
          {(street || town) && (
            <address className="text-xs text-gray-700 not-italic dark:text-gray-300">
              {street && <div>{street}</div>}
              {town && <div>{town}</div>}
            </address>
          )}
        </div>
      </div>
      <address className="flex flex-col gap-2 not-italic">
        {phone && (
          <a
            href={`tel:${phone.replaceAll(/\s/g, '')}`}
            className="button-link inline-flex w-full items-center justify-center rounded-sm bg-transparent px-4 py-2 text-xs text-link lowercase transition duration-150 ease-in-out hover:bg-link/15 md:justify-start dark:text-link-dark dark:hover:bg-link-dark/15"
          >
            <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>{phone}</span>
          </a>
        )}
        {emailSplit && (
          <a
            href={`mailto:${email}`}
            className="button-link inline-flex w-full items-center justify-center rounded-sm bg-transparent px-4 py-2 text-xs text-link lowercase transition duration-150 ease-in-out hover:bg-link/15 md:justify-start dark:text-link-dark dark:hover:bg-link-dark/15"
            rel="nofollow"
          >
            <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>
              {emailSplit[0]}
              <span className="hidden">buero</span>@{emailSplit[1]}
            </span>
          </a>
        )}
      </address>
    </article>
  );
}

export default ContactCard;
