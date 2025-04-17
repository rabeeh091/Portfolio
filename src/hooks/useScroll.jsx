

const useScroll = () => {
    const scrollTo =(id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({behavior:'smooth'})
    }
  };
  
  return { scrollTo }
}

export default useScroll