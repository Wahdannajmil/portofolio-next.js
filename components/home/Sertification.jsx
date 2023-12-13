import React from "react";

export const Sertification = () => {
    const posts = [
        {
            title: "Frontend Web Development",
            img: "https://i.postimg.cc/zBpQ4RwB/sr-skilvul.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link: "https://udemy-certificate.s3.amazonaws.com/image/UC-8d489c10-75f6-4e2b-91af-9821846416d2.jpg",
        },

        {
            title: "Reactjs",
            img: "https://i.postimg.cc/TPVFqspn/sr-codingstudio.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link : "https://drive.google.com/file/d/1ZOyYtUVXpUxJv0Lxyv2fZm5Qxgm4qWjy/view"
        },
        {
            title: "Nextjs & Reactjs",
            img: "https://i.postimg.cc/mDTqdSHJ/sr-udemy.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link : "https://drive.google.com/file/d/1ZOyYtUVXpUxJv0Lxyv2fZm5Qxgm4qWjy/view"
        },
        {
            title: "Ai-Webinar",
            img: "https://i.postimg.cc/6QJFZK59/sr-udinus.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link : "https://drive.google.com/file/d/1ZOyYtUVXpUxJv0Lxyv2fZm5Qxgm4qWjy/view"
        },
        {
            title: "Figma",
            img: "https://i.postimg.cc/9QfrvtS3/Skilvul-Skil-Badge-Skilvul-Product-Tema-Kesehatan.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link : "https://drive.google.com/file/d/1ZOyYtUVXpUxJv0Lxyv2fZm5Qxgm4qWjy/view"
        },
        {
            title: "Javascript",
            img: "https://i.postimg.cc/N0S989p3/Skilvul-Skil-Badge-Java-Script-Dasar-3.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            link : "https://drive.google.com/file/d/1ZOyYtUVXpUxJv0Lxyv2fZm5Qxgm4qWjy/view"
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
                            <h4 className="text-left text-xl font-semibold text-blue-600 dark:text-red-600">
                                {item.title} 
                            </h4>
                            <p className="mb-2 leading-normal dark:text-white text-left">
                                {item.content}
                            </p>
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-sm text-blue-100 bg-blue-600 rounded shadow"
                                >
                                    view
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};