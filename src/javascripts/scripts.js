// Función para abrir/cerrar carpetas
function toggleFolder(element) {
    const parent = element.parentElement;
    parent.classList.toggle('open');
    const nestedList = parent.querySelector('ul');
    
    if (parent.classList.contains('open')) {
      nestedList.style.display = 'block';
    } else {
      nestedList.style.display = 'none';
      closeNestedFolders(parent);
    }
  }
  
  function closeNestedFolders(folder) {
    const openFolders = folder.querySelectorAll('.folder.open');
    openFolders.forEach((openFolder) => {
      openFolder.classList.remove('open');
      const nestedList = openFolder.querySelector('ul');
      nestedList.style.display = 'none';
    });
  }
  