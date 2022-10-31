const storageCtrl = (function(){
    return {
        storeItem : function(newItem)
        {
            let items = [];
            if(localStorage.getItem('items') === null)
            {
                items = [];
                items.push(newItem);
                localStorage.setItem('items' , JSON.stringify(items));
            }
            else
            {
                items = JSON.parse(localStorage.getItem('items'));
                items.push(newItem);
                localStorage.setItem("items" , JSON.stringify(items));
            }
        },
        getItemsFromStorage : function()
        {
            let items ;
            if(localStorage.getItem("items") === null)
            {
                items = [];
            }
            else
            {
                items = JSON.parse(localStorage.getItem("items"));
            }
            return items;
        },
        updateItemStorage : function(updatedItem)
        {
            let items = JSON.parse(localStorage.getItem("items"));
            items.forEach((item,index)=>{
                if(updatedItem.id === item.id)
                {
                    items.splice(index , 1 , updatedItem);
                }
            });
            localStorage.setItem("items" , JSON.stringify(items));
        },
        deleteFromLocalStorage: function(id)
        {
            let items = JSON.parse(localStorage.getItem("items"));
            items.forEach((item,index)=>{
                if(id === item.id)
                {
                    items.splice(index , 1);
                }
            });
            localStorage.setItem("items" , JSON.stringify(items));
        },
        clearItemFormLocalStorage : function()
        {
            localStorage.removeItem("items");
        }
    }
})();


const itemCtrl = (function(){
    const Item = function(id , name , calories)
    {
        this.id = id ;
        this.name = name ;
        this.calories = calories;
    }

    const data = {
        // items : [
        //     // {id : 0 , name : "Butter Chicken" , calorie : 12000},
        //     // {id : 1 , name : "Eggs" , calorie : 120},
        //     // {id : 2 , name : "Brown Bread" , calorie : 1100},
        // ],
        items : storageCtrl.getItemsFromStorage(),
        currentItem : null,
        totalCalories : 0
    }

    //the things we return are the only items that can be accessed by us
    return {
        getItems: function(){
            return data.items;
        },
        getCurrentItem : function()
        {
            return data.currentItem;
        },
        addItems : function(name , calories)
        {
            let id ;
            if(data.items.length)
            {
                id = data.items[data.items.length-1].id+1;
            }
            else
            {
                id = 0 ;
            }
            calories = parseInt(calories);
            const newItem = new Item(id , name , calories );
            data.items.push(newItem);
            return newItem;
        },
        updateItem : function(name , calories){
            calories = parseInt(calories);
            let found = null;
            data.items.forEach(item=>{
                if(item.id === data.currentItem.id)
                {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        clearAllItems:function()
        {
            data.items = [];
        },
        getItemById:function(id){
            let found = null;
            data.items.forEach(item=>{
                if(id === item.id)
                {
                    found = item;
                }
            });
            return found;   
        },
        deleteItem : function(id)
        {
            const ids = data.items.map(item=>item.id);
            const ind = ids.indexOf(id);
            data.items.splice(ind , 1);
        },
        getTotalCalories : function()
        {
            let total = 0 ;
            data.items.forEach(item=>total+=item.calories);
            data.totalCalories = total;
            // console.log(total);
            return data.totalCalories;
        },
        setCurrentItem : function(item){
            data.currentItem = item;
        },
        logData : function()
        {
            return data;
        }
    }

})();

const uiCtrl = (function(){
    const uiSelectors = {
        itemList : 'item-list',
        listItems : "#item-list li",
        addBtn : '.add-btn',
        deleteBtn : '.delete-btn',
        updateBtn : '.update-btn',
        clearBtn:'.clear-btn',
        backBtn : '.back-btn',
        itemNameInput : '#item-name',
        itemCalorieInput : '#item-calories',
        totalCalorieCount : ".total-calories"
    }
    return {
        populateItemList : function(items)
        {
            let html = '';
            items.forEach(item=>{
                html+=`<li class = "collection-item" id = "item-${item.id}">
                <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                <a href = "#" class = "secondary-content"><i class ="edit-item fa fa-pencil"></i></a>
                </li>`;
            });
            // console.log(html);
            document.getElementById(uiSelectors.itemList).innerHTML = html;
        },
        
        
        
        
        
        
        getItemInput : function()
        {
            return {
                name : document.querySelector(uiSelectors.itemNameInput).value , 
                calories : document.querySelector(uiSelectors.itemCalorieInput).value
            }
        },
        addListItem : function(item){
            document.getElementById(uiSelectors.itemList).style.display = "block";
            const li = document.createElement("li");
            li.className = "collection-item";
            li.id = `item-${item.id}`;
            li.innerHTML =`<strong>${item.name}: </strong><em>${item.calories} Calories</em>
                <a href = "#" class = "secondary-content"><i class ="edit-item fa fa-pencil"></i></a>`;
            document.getElementById(uiSelectors.itemList).insertAdjacentElement('beforeend' , li);
        },
        clearInput : function(){
            document.querySelector(uiSelectors.itemNameInput).value = '';
            document.querySelector(uiSelectors.itemCalorieInput).value = '';
        },
        hideList : function(){
            document.getElementById(uiSelectors.itemList).style.display = "none";
        },
        showTotalCalories:function(totalCalories){
            document.querySelector(uiSelectors.totalCalorieCount).textContent = totalCalories;
        },
        clearEditState:function()
        {
            uiCtrl.clearInput();
            document.querySelector(uiSelectors.deleteBtn).style.display = "none";
            document.querySelector(uiSelectors.updateBtn).style.display = "none";
            document.querySelector(uiSelectors.backBtn).style.display = "none";
            document.querySelector(uiSelectors.addBtn).style.display = "inline";

        },
        addItemToForm : function(item)
        {
            document.querySelector(uiSelectors.itemNameInput).value = item.name;
            document.querySelector(uiSelectors.itemCalorieInput).value = item.calories;
            uiCtrl.showEditState();
        },
        showEditState : function()
        {
            document.querySelector(uiSelectors.deleteBtn).style.display = "inline";
            document.querySelector(uiSelectors.updateBtn).style.display = "inline";
            document.querySelector(uiSelectors.backBtn).style.display = "inline";
            document.querySelector(uiSelectors.addBtn).style.display = "none";
        },
        updateItem : function(item)
        {
            let listItems = document.querySelectorAll(uiSelectors.listItems);
            listItems = Array.from(listItems);
            listItems.forEach(listItem=>{
                const itemId = listItem.getAttribute('id');
                if(itemId === `item-${item.id}`)
                {
                    document.querySelector(`#${itemId}`).innerHTML = `<strong>${item.name}: </strong><em>${item.calories} Calories</em>
                <a href = "#" class = "secondary-content"><i class ="edit-item fa fa-pencil"></i></a>`;
                }
            });
        },
        deleteListItem : function(id)
        {
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },
        clearItems : function()
        {
            let listItems = document.querySelectorAll(uiSelectors.listItems);
            listItems = Array.from(listItems);
            listItems.forEach(item=>item.remove());
        },
        getSelectors : function()
        {
            return uiSelectors;
        }
    }
})();

const appCtrl = (function(itemCtrl , uiCtrl , storageCtrl){
    const loadEventListeners = function(){
        const uiSelectors = uiCtrl.getSelectors();
        document.querySelector(uiSelectors.addBtn).addEventListener("click",itemAddSubmit);

        document.addEventListener("keypress" , (e)=>{
            if(e.keyCode === 13 || e.which === 13)
            {
                e.preventDefault();
                return false;
            }
        });

        document.getElementById(uiSelectors.itemList).addEventListener("click",itemEditClick);
        document.querySelector(uiSelectors.updateBtn).addEventListener("click",itemUpdateSubmit);
        document.querySelector(uiSelectors.deleteBtn).addEventListener("click",itemDeleteSubmit);
         document.querySelector(uiSelectors.clearBtn).addEventListener("click",clearAllItemsClick);
        document.querySelector(uiSelectors.backBtn).addEventListener("click",backButtonClick);
    }

    const backButtonClick = function(e)
    {
        uiCtrl.clearEditState();
        e.preventDefault();
    }
     
    const clearAllItemsClick = function(e)
    {
        itemCtrl.clearAllItems();
        const totalCalories = itemCtrl.getTotalCalories();
        uiCtrl.showTotalCalories(totalCalories);
        uiCtrl.clearItems();
        storageCtrl.clearItemFormLocalStorage();
        uiCtrl.hideList();
        e.preventDefault();
    }

    const itemAddSubmit = function(e)
    {
        const itemInput = uiCtrl.getItemInput();
        console.log(itemInput);

        if(itemInput.name !== '' && itemInput.calories!=='')
        {
            const newItem = itemCtrl.addItems(itemInput.name , itemInput.calories);
            // uiCtrl.addListItem(newItem);
            console.log(newItem);
            uiCtrl.addListItem(newItem);
            const totalCalories = itemCtrl.getTotalCalories();
            uiCtrl.showTotalCalories(totalCalories);
            storageCtrl.storeItem(newItem);
            uiCtrl.clearInput();

        }
        e.preventDefault();
    }
    const itemEditClick = function(e)
    {
        if(e.target.classList.contains("edit-item"))
        {
            const listId = e.target.parentNode.parentNode.id;
            const listIdArr = listId.split('-');
            const id = parseInt(listIdArr[1]);
            const itemToEdit = itemCtrl.getItemById(id); 
            itemCtrl.setCurrentItem(itemToEdit);
            uiCtrl.addItemToForm(itemCtrl.getCurrentItem());
        }
        e.preventDefault();
    }
    const itemUpdateSubmit =  function(e)
    {
        const input = uiCtrl.getItemInput();
        const updatedItem = itemCtrl.updateItem(input.name , input.calories);
        console.log(updatedItem);
        uiCtrl.updateItem(updatedItem);
        const totalCalories = itemCtrl.getTotalCalories();
        uiCtrl.showTotalCalories(totalCalories);
        storageCtrl.updateItemStorage(updatedItem);
        uiCtrl.clearEditState();
        e.preventDefault();
    }

    const itemDeleteSubmit = function(e)
    {
        const currentItem = itemCtrl.getCurrentItem();
        itemCtrl.deleteItem(currentItem.id);
        uiCtrl.deleteListItem(currentItem.id);
        const totalCalories = itemCtrl.getTotalCalories();
        uiCtrl.showTotalCalories(totalCalories);
        storageCtrl.deleteFromLocalStorage(currentItem.id);
        uiCtrl.clearEditState();
        e.preventDefault();
    }


    return {
        init : function()
        {
            uiCtrl.clearEditState();
            const items = itemCtrl.getItems();
            if(items.length === 0)
            {
                uiCtrl.hideList();
            }
            else
            {
                uiCtrl.populateItemList(items);
            }
            const totalCalories = itemCtrl.getTotalCalories();
            uiCtrl.showTotalCalories(totalCalories);
            loadEventListeners();
        }
    }
})(itemCtrl , uiCtrl , storageCtrl);

appCtrl.init();




