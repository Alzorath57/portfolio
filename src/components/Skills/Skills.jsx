import skills from "../../data/skills";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills" id="competences">
      <h2 className="skills__title">Compétences</h2>
      <div className="skills__groups">
        {skills.map((group) => (
          <div className="skills__group" key={group.category}>
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li className="skills__badge" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
