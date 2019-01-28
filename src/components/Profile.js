import React from 'react';

const Profile = ({data}) => (
    <div className="user-profile">
        <p>
            <span>Город: {data.city}</span>
        </p>
        <p>
            Знание языков: {data.languages && data.languages.map((item, i)=>(<span key={i}>- {item}</span>))}
        </p>
        <p>
            Ссылки: {data.social && data.social.sort((a,b)=>(a.label === 'web' ? -1 : b.label === 'web' ? 1 : 0)).map((item, i)=>(
                <span key={i} className="link-box">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.label}>{item.label}</a>
                </span>
        ))}
        </p>
    </div>
);

export default Profile