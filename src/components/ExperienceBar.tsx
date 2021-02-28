export function ExperienceBar(){ // Componente ExperienceBar
    return(
       <header className="experience-bar">
           <span>0 xp</span> 
                <div> 
                    <div style={{width: '50%' }}/> 

                    <span className="current-experience" style={{ left: '50%' }}>300 xp</span>
                </div>
           <span>600 xp</span>
       </header> 
    ); // Estilo variavel não se mantem no css fixo (arquivo css), como: "<div style={{width: '60%' }}/>" o style dele é variavel ao crescimento do level do usurario, ele se varia muito / Sendo utilizado futuramente a ser controlado pelo JS 
}