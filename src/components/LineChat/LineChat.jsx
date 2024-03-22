import { LineChart, Line, YAxis, XAxis } from 'recharts';

const LineChat = () => {

    const mathMarksData = [
        { id: 1, name: 'Sumu', math: 61, physics: 75, chemistry: 85 },
        { id: 2, name: 'Sumi', math: 72, physics: 80, chemistry: 90 },
        { id: 3, name: 'Laboni', math: 31, physics: 55, chemistry: 60 },
        { id: 4, name: 'Pappu', math: 91, physics: 95, chemistry: 88 },
        { id: 5, name: 'Tushar', math: 71, physics: 85, chemistry: 75 },
        { id: 6, name: 'Amin', math: 85, physics: 92, chemistry: 78 },
        { id: 7, name: 'Mitu', math: 51, physics: 65, chemistry: 70 },
        { id: 8, name: 'Sohani', math: 81, physics: 88, chemistry: 82 },
        { id: 9, name: 'Asik', math: 90, physics: 93, chemistry: 90 },
        { id: 10, name: 'Papiya', math: 40, physics: 50, chemistry: 55 }
    ];
      
    return (
        <div>
            <LineChart  className='' width={800} height={400} data={mathMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
        
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LineChart>
        </div>
    );
}

export default LineChat;