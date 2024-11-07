import { ChildComp, getImageUrl } from './PracticeComp';

export default function Practice() {
  return (
    <>
    <h1>Notable Scientists</h1>
    <ChildComp 
        src={getImageUrl('szV5sdG')}
        alt={'Maria Skłodowska-Curie'}
        prof={'physicist and chemist'}
        name={'Maria Skłodowska-Curie'}
        awards={'(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'}
        disc={'polonium (chemical element)'}
    />
    <ChildComp 
        src={getImageUrl('YfeOqp2')}
        alt={'Katsuko Saruhashi'}
        prof={'geochemist'}
        name={'Ana bilis'}
        awards={'(Miyake Prize for geochemistry, Tanaka Prize)'}
        disc={'a method for measuring carbon dioxide in seawater'}
    />
    
    </>
  );
}
