import React, { FC } from 'react';

interface ViewButtonProps {
    offset: string | number;
    className?: string;
    text: string;
}

const ViewButton: FC<ViewButtonProps> = ({ offset, className = '', text }) => {
    return (
        <a target="_blank"
            data-atropos-offset={offset}
            className={`group  inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500  ${className}`}
            href="/download"
        >
            <span className="absolute -start-full transition-all group-hover:start-4">
                <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
                {text}
            </span>
        </a>
    );
};

export default ViewButton;
