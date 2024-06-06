import React from "react";
import service from "../appwrite/config";
import { Link } from 'react-router-dom';
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
    return (
        <Link to={`post/${$id}`}>


            <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img src={service.getFilePreview(featuredImage)} alt={title} className="h-56 w-full object-cover" />

                <div className="p-4 sm:p-6">
                    <Link to={`post/${$id}`}>
                        <h3 className="text-lg font-medium text-gray-900">
                            {title}
                        </h3>
                    </Link>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {parse(content)}
                    </p>

                    <Link to={`post/${$id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Find out more

                        <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </article>
        </Link>
    )
}

export default PostCard;