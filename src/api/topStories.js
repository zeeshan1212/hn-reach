import { API_URI } from "../config";

export const topStories = async () => {
  const data = await fetch(`${API_URI}/topstories.json`);
  const id_js = await data.json();
  const ids = id_js.slice(0, 10);
  const stories = [];
  ids.forEach(async (id) => {
    const data = await fetch(`${API_URI}/item/${id}.json`);
    const story = await data.json();
    stories.push(story);
  });
  return stories;
};
