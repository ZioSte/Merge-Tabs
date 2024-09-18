chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({}, (tabs) => {
    const tabIds = tabs.map(t => t.id);
    chrome.tabs.group({ tabIds: tabIds }, (groupId) => {
      chrome.tabGroups.update(groupId, { title: 'Tutte le Schede' });
    });
  });
});