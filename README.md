# morph-ripple
General ripple animation element for Polymorph Components

## Getting Started:
For the information about how to clone the desired repository, running the local server and testing, please refer to this [link](https://github.com/moduware/polymorph-components/blob/master/INFO.md).


## Demo
  - Here is a quick demo of the morph-ripple element.

  ![alt text](https://user-images.githubusercontent.com/15607784/33458062-90b40f54-d5d9-11e7-9d65-4c2928d1193a.png)


  ```html

  <template>
    <div class="ripple-wrapper">
      <morph-ripple></morph-ripple>
    </div>
  </template>

  ```


- Morph-ripple demo on other elements.



  ![alt text](https://user-images.githubusercontent.com/15607784/33458209-2f1a51da-d5da-11e7-9cbc-dd7c21073ced.png)


  ```html

  <template>
    <h3>Android morph-tabbar demo</h3>
    <morph-tabbar platform="android" selected="play">
      <morph-tabbar-item platform="android" name="play" not-selected-image="../img/play_android.svg" selected-image="../img/play_android_selected.svg"></morph-tabbar-item>
      <morph-tabbar-item platform="android" name="favorite" not-selected-image="../img/favorite_android.svg" selected-image="../img/favorite_android_selected.svg"></morph-tabbar-item>
      <morph-tabbar-item platform="android" name="mic" not-selected-image="../img/mic_android.svg" selected-image="../img/mic_android_selected.svg"></morph-tabbar-item>
    </morph-tabbar>
  </template>

  ```





- The code below shows how we use it inside the elements.


  ![alt text](https://user-images.githubusercontent.com/15607784/33460189-dd317724-d5e1-11e7-9bd7-ca784e9aa012.png)

  ```html
  <a href$="[[link]]" target$="[[target]]" rel$="[[relation]]">
    <slot></slot>
    <morph-ripple></morph-ripple>
  </a>
  ```


### Styling


Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--ripple-color`                 | Color of the ripple                    | #2196f3
