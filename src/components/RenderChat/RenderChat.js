import React from 'react';

export default function RenderChat({ chat }) {

    const displayChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ));
    };

    return (
        <div>
            {displayChat()}
        </div>
    )
}
