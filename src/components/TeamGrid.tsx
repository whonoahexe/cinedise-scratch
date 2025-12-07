"use client";

import { useState } from 'react';
import './TeamGrid.css';

const teamMembers = [
    {
        name: "Kunal Mahto",
        role: "CEO & Co-Founder (Management)",
        bio: "CEO, Co-Founder, Manager Extraordinaire, and the unsung hero who keeps the chaos from becoming a full-blown circus. When he's not saving the team from total management meltdowns, he's behind the camera or deep into editing mode (probably with three cups of coffee and a playlist that screams focus). Kunal's motto? \"Stay calm, stay creative — and make it look easy while you're at it.\"",
        image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/team/Kunal.jpg"
    },
    {
        name: "Suryadip Panda",
        role: "CEO & Co-Founder (Cinematographer)",
        bio: "CEO, Co-Founder, Cinematographer, Colorist and probably the guy who fixes the coffee machine too. When he's not busy building empires, he's behind the camera making magic happen (and occasionally tripping over tripods). Suryadip believes in working hard, dreaming bigger, and laughing through the chaos — because if you can't have fun while running the show, what's the point?",
        image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/team/Surya.jpg"
    },
    {
        name: "Sneha Maji",
        role: "Editor",
        bio: "Editor, emotional candle collector, and part-time speed ramping champion (seriously, she's probably still ramping as you read this). She edits with heart, lives with drama, and somehow manages to fight with her beloved dog Luna more than with actual people. If she's not lost in a timeline or talking to her dog like a human, you'll find her living her best life... probably inside a Dmart aisle, surrounded by snacks and scented candles.",
        image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/team/Sneha.jpg"
    },
    {
        name: "J B Roza",
        role: "VFX Supervisor",
        bio: "Visual Effects Supervisor who spends her days bossing around invisible monsters & fixing explosions frame by frame. She's wildly dedicated to her craft & equally dedicated to eating cake whenever possible. If she's not tweaking pixels, she's probably hunting for the next best dessert. If you see a perfect VFX shot & a missing slice of cake, Roza was there.",
        image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/team/Roza.jpg"
    },
    {
        name: "Devdeep Maiti",
        role: "Graphic Designer",
        bio: "Graphic Designer, certified sweetheart of the team, and unofficial \"most likely to be late because he's still fixing his hair.\" His designs are sharp, clean, and ready on time — unlike him, if you're waiting to leave for a shoot. But hey, when you look that good and design even better, a little extra mirror time is basically a professional requirement.",
        image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/team/Devdeep.jpg"
    },
    {
        name: "Noah",
        role: "Motion & Web Designer",
        bio: "Motion Designer, Web Developer, and the unofficial \"Ease In, Ease Out\" philosopher of the team (seriously, he probably animates his own coffee refills). Fueled by creativity, caffeine, and the occasional \"wait, what does that Hindi word mean?\" moment, Noah keeps the ideas flowing smoother than his playback renders. When he's not designing magic, he's at home being bossed around by his two cats — because even the most productive guy needs supervisors.",
        image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/team/Noah.jpg"
    }
];

export default function TeamGrid() {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    const handleMemberClick = (member: typeof teamMembers[0]) => {
        // Only open modal on mobile (below 768px matches CSS)
        if (window.innerWidth <= 768) {
            setSelectedMember(member);
        }
    };

    return (
        <>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member" onClick={() => handleMemberClick(member)}>
                        <div className="team-image-wrap">
                            <img src={member.image} alt={member.name} className="team-image" />
                        </div>
                        <div className="team-info">
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            {/* Desktop hover bio (Popout via CSS) */}
                            <div className="team-bio">{member.bio}</div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedMember && (
                <div className={`bio-modal ${selectedMember ? 'active' : ''}`} onClick={() => setSelectedMember(null)}>
                    <div className="bio-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="bio-modal-close" onClick={() => setSelectedMember(null)}>&times;</span>
                        <h2 className="bio-modal-name">{selectedMember.name}</h2>
                        <p className="bio-modal-role">{selectedMember.role}</p>
                        <p className="bio-modal-bio">{selectedMember.bio}</p>
                    </div>
                </div>
            )}
        </>
    );
}
