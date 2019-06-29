getProfile = (payload) => {
    const data = {
      name : 'Ferdynal',
      age: 24,
      address: 'Cendana Mata Air Padang Selatan',
      hobbies: ['Gaming', 'Watching'],
      is_married: false,
      list_school : {
        name: 'Universitas Putra Indonesia',
        year_in : 2013,
        year_out: 2017,
        major : 'Electronic Engineering'       
      },
      skill : {
        skill_name : 'React',
        level : 'beginner'
      },
      interest_in_coding : true
    };
   return data
 }
 
 console.log(getProfile());