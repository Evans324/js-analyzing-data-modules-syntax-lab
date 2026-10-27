function combineUsers(...args) {
  const combinedobject = {
    users: []
  };

  for (const array of args) {
    combinedobject.users = [...combinedobject.users, ...array];
  }

  combinedobject.merge_date = Date.today().toString("10/27/2026");

  return combinedobject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};