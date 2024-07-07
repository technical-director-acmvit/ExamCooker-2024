"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Subject } from '@prisma/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface ResourceCardProps {
    subject: Subject;
}

function ResourceCard({ subject }: ResourceCardProps) {
    const [isFav, setIsFav] = useState(false);
    //Since the Subject datatype only has a "name" field, I assume that the name has to be something like "COURSECODE - COURSENAME" and 
    //am hence, using the '-' character to split the string
    let [courseCode, courseName] = subject.name.split('-');

    courseName = courseName ? courseName : "Subject Name";

    const toggleFavorite = () => {
        setIsFav(!isFav);
    };

    return (
        <div className="flex-col justify-between w-full h-full p-4 bg-[#5FC4E7] hover:border-b-white transition-colors duration-200 transform hover:scale-105 hover:shadow-lg">
            <div className='items-start'>
                <Link href={`/resources/${subject.id}`} className="block w-full text-left">
                    <p>RESOURCES</p>
                    <h4>{courseName.trim()}</h4>
                    <h6>Course Code: {courseCode.trim()}</h6>
                </Link>
            </div>
            <div className='items-end'>
                <div className='flex justify-between'>
                    <div />
                    <button onClick={toggleFavorite} className="ml-4" style={{ color: isFav ? 'red' : 'lightgrey' }}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResourceCard;
