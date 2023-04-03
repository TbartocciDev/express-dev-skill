const skills = [
    {id:1, title:'HTML5', summary:'A web dev skill for adding elemnts to screen'},
    {id:2, title:'Cascading Style Sheets', summary:'A web dev skill for styling screens'},
    {id:3, title:'JavaScript', summary:'Programming language, could be used hand and hand with web dev'},
    {id:4, title:'Swift', summary:'Programming laguage used for iOS dev'},
    {id:5, title:'XCode', summary:'Program used to assist iOS dev'},
    {id:6, title:'MongoDB', summary:'Program used to handle full stack dev'},
    {id:7, title:'Expresss', summary:'Program used to handle full stack dev'}
]

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

  function create(skill) {
    skill.id = getAll().length + 1

    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);

    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function update(id,updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
  }