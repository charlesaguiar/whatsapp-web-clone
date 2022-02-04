import DateTime from 'luxon';

interface Message {
    content: string;
    sentAt: Date;
    seenAt: Date;
}

export interface IContact {
    id: number,
    username: string;
    picture: string;
    lastMessage: Message | null;
    isMuted: boolean;
    isPinned: boolean
    unseenMessages: number;
}

export function getContacts(q: number): IContact[] {
    const res:IContact[] = [];
    
    for (let k = 0; k < q; k++) {
        res.push({
            id: k,
            username: `Teste ${k}`,
            picture: `https://picsum.photos/500?random=${k + 1}`,
            lastMessage: {
                content: 'Testeeeee',
                sentAt: new Date(),
                seenAt: new Date(),
            },
            isMuted: false,
            isPinned: k < 3,
            unseenMessages: 0,
        });
    }

    return res;
}

export default null;