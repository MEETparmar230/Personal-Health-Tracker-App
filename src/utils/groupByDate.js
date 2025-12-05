

export function groupActivitiesByDate(activities) {
  const groups = activities.reduce((acc, activity) => {
    const date = activity.time.split("T")[0];

    if (!acc[date]) acc[date] = [];
    acc[date].push(activity);

    return acc;
  }, {});

  return Object.keys(groups)
    .sort((a, b) => new Date(b) - new Date(a)) 
    .map(date => ({
      title: date,
      data: groups[date],
    }));
}
