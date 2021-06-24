import { useSelector } from 'react-redux';
import Paragraph from '../Paragraph/Paragraph.component';
import Title from '../Title/Title.component';

export default function ContentContainer() {
    const {title, description} = useSelector(state => state);
    
    return <div className="w-40 text-center select-none">
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
    </div>
}