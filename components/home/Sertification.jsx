import React from "react";

export const Sertification = () => {
    const posts = [
        {
            title: "React Tailwind Card with Grid 1",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link: "https://udemy-certificate.s3.amazonaws.com/image/UC-8d489c10-75f6-4e2b-91af-9821846416d2.jpg",
        },
        {
            title: "React Tailwind Card with Grid 2",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link : "https://drive.google.com/file/d/1ZOyYtUVXpUxJv0Lxyv2fZm5Qxgm4qWjy/view"
        },
        {
            title: "React Tailwind Card with Grid 3",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];
    return (
        <>
            <h3 className="text-left font-mono text-3xl py-5 dark:text-white mb-5 mt-5">My Sertification</h3>
            <div className="grid gap-2 lg:grid-cols-4">
                {posts.map((item, index) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={index}>
                        <img
                            className="object-cover w-full h-48"
                            src={item.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600 dark:text-red-600">
                                {item.title} 
                            </h4>
                            <p className="mb-2 leading-normal dark:text-white">
                                {item.content}
                            </p>
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
                                >
                                    Read more
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};