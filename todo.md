TODO:
===

## Task 1:
### _mandatory_: Implement infinite scrolling
* Implement a simple design as in design.png or something of your own.
* When the app loads get the first batch of items by calling ```getEntries``` function from ```./src/services/api.js``` <br>
```getEntries``` returns a Promise which resolves with an object containing ```entries``` - an array of 20 strinngs that are to be showen in the list as items and ```canLoadMore``` - a flag that tells wheather there are more items to load.
* When user scrolles to the end of the list a spinnner should appear as in design and next batch of items should be loaded.

## Task 2:
### _optional_: Implement refresh
* use react-natives RefreshControl api to implement "pull down to refresh" functionality.

## Task 3:
### _optional_: Implement selection of multiple items
* When user taps an item it should change it's style as showen in design.png, or something simmilar and back when the item is tapped for the second time.
* Allow for multiple items to be selected simultaneously.

## Task 4:
### _optional_: Implement selection animation
* Imlement a simple animation as showen in design.png that would fire when the item is selected/unselected.