## Siemens IX for Blazor

## Installation

Install the `SiemensIXBlazor` package from the [NuGet](https://www.nuget.org/packages/SiemensIXBlazor/) package manager.

## .NET CLI

```cmd
dotnet add package SiemensIXBlazor
```

## Package Manager

```cmd
NuGet\Install-Package SiemensIXBlazor
```

Add required `CSS` and `Javascript` packages into the `index.html` file.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blazor App</title>
    <link
      rel="stylesheet"
      href="_content/SiemensIXBlazor/css/siemens-ix/ix-icons.css"
    />
    <link
      rel="stylesheet"
      href="_content/SiemensIXBlazor/css/siemens-ix/siemens-ix.css"
    />
  </head>
  <body>
    ...
    <script src="_content/SiemensIXBlazor/js/siemens-ix/index.bundle.js"></script>
  </body>
</html>
```

### Supported Components

- [Basic Navigation](#basic-navigation) **(since v0.2.7)**
- [Navigation Menu](#navigation-menu) **(since v0.2.7)**
- [About and Legal](#about-and-legal) **(since v0.2.7)**
- [Settings](#settings) **(since v0.2.7)**
- [Map Navigation](#map-navigation) **(since v0.2.7)**
- [Popover News](#popover-news) **(since v0.2.7)**
- [Blind](#blind)
- [Breadcrumb](#breadcrumb)
- [Button](#button)
- [Icon Button](#icon-button)
- [Category Filter](#category-filter)
- [ECharts](#echarts) **(since v0.3.2)**
- [Checkbox](#checkbox)
- [Chip](#chip)
- [Date Picker](#date-picker)
- [Date Time Picker](#date-time-picker)
- [Divider](#divider)
- [Drawer](#drawer)
- [Dropdown Button](#dropdown-button)
- [Dropdown](#dropdown)
- [Event List](#event-list)
- [Expanding Search](#expanding-search)
- [Flip](#flip)
- [Group](#group)
- [HTML Table](#html-table)
- [Input](#input)
- [KPI](#kpi)
- [Message Bar](#message-bar)
- [Modal](#modal)
- [Pagination](#pagination) **(since v0.2.6)**
- [Pill](#pill)
- [Radio Button](#radio-button)
- [Select](#select)
- [Spinner](#spinner)
- [Split Button](#split-button)
- [Tabs](#tabs)
- [Text Area](#text-area)
- [Tile](#tile)
- [Time Picker](#time-picker)
- [Toast](#toast)
- [Toggle](#toggle)
- [Tooltip](#tooltip)
- [Tree](#tree) **(since v0.2.9)**
- [Upload](#upload)
- [Form Validation](#form-validation)
- [Workflow](#workflow)

## Basic Navigation

```html
<BasicNavigation ApplicationName="Application name">
  <placeholder-logo slot="logo"></placeholder-logo>
  <NavigationMenu Id="nav-menu-1">
    <NavigationMenuItem>Item 1</NavigationMenuItem>
    <NavigationMenuItem>Item 2</NavigationMenuItem>
  </NavigationMenu>
</BasicNavigation>
```

## Navigation Menu

```html
<NavigationMenu Id="nav-menu-1">
  <NavigationMenuItem Home="true" TabIcon="home"> Home </NavigationMenuItem>
  <NavigationMenuItem TabIcon="globe"> Normal Tab </NavigationMenuItem>
  <NavigationMenuItem TabIcon="star" disabled> Disabled tab </NavigationMenuItem>
  <NavigationMenuItem TabIcon="star"> With other icon </NavigationMenuItem>
  <NavigationMenuItem TabIcon="globe" Style="display: none">
    Should not be visible
  </NavigationMenuItem>
</NavigationMenu>
```

```html
@* Avatar *@
<NavigationMenu Id="nav-menu-1">
  <NavigationMenuAvatar Id="nav-avatar-menu-1" Image="https://ui-avatars.com/api/?name=John+Doe">
    <NavigationMenuAvatarItem Id="nav-avatar-item-1" Label="Option 1"></NavigationMenuAvatarItem>
  </NavigationMenuAvatar>
  <NavigationMenuItem Home="true" TabIcon="home"> Home </NavigationMenuItem>
  <NavigationMenuItem TabIcon="globe"> Normal Tab </NavigationMenuItem>
  <NavigationMenuItem TabIcon="star" Disabled="true"> Disabled tab </NavigationMenuItem>
  <NavigationMenuItem TabIcon="star"> With other icon </NavigationMenuItem>
  <NavigationMenuItem TabIcon="globe" Style="display: none">
    Should not be visible
  </NavigationMenuItem>
</NavigationMenu>
```

## About and Legal

```html
<BasicNavigation>
  <placeholder-logo slot="logo"></placeholder-logo>
  <NavigationMenu Id="nav-menu-1">
    <AboutMenu @ref="aboutMenuElement">
      <AboutMenuItem Label="Tab 1">Content 1</AboutMenuItem>
      <AboutMenuItem Label="Tab 2">Content 2</AboutMenuItem>
    </AboutMenu>
  </NavigationMenu>
</BasicNavigation>
```

```csharp
AboutMenu aboutMenuElement;

aboutMenuElement.ToggleAbout(true);
```

## Settings

```html
<BasicNavigation>
  <placeholder-logo slot="logo"></placeholder-logo>
  <NavigationMenu Id="nav-menu-1">
    <MenuSettings @ref="settingsMenuElement">
      <MenuSettingsItem
        Label="Example Setting 1"
      ></MenuSettingsItem>
      <MenuSettingsItem
        Label="Example Setting 2"
      ></MenuSettingsItem>
    </MenuSettings>
  </NavigationMenu>
</BasicNavigation>
```

```csharp
SettingsMenu settingsMenuElement;

aboutMenuElement.ToggleSettings(true);
```

## Map Navigation

```html
<MapNavigation
  ApplicationName="Test Application"
  NavigationTitle="Some other content"
>
  <placeholder-logo slot="logo"></placeholder-logo>
  <NavigationMenu Id="nav-menu-1">
    <NavigationMenuItem>Item 1</NavigationMenuItem>
    <NavigationMenuItem>Item 2</NavigationMenuItem>
    <NavigationMenuItem>Item 3</NavigationMenuItem>
  </NavigationMenu>
  <div slot="sidebar-content">Sidebar content</div>
  <div>Content</div>
</MapNavigation>
```

## Popover News

```html
<BasicNavigation>
  <placeholder-logo slot="logo"></placeholder-logo>
  <NavigationMenu Id="nav-menu-1">
    <AboutMenu>
      <AboutMenuItem Label="Example"> </AboutMenuItem>
    </AboutMenu>
    <AboutMenuNews Label="Test" Show="true" AboutItemLabel="Example">
      Test
    </AboutMenuNews>
  </NavigationMenu>
</BasicNavigation>
```

## Blind

```html
<Blind 
    Label="Test Blind" 
    Id="blind1" 
    CollapsedChangedEvent="(value) => BlindEventHandler(value)">
Test content
</Blind>
```

## Breadcrumb

```html
<Breadcrumb Id="breadcrumb-1" 
            Class="editor-breadcrumb" 
            ItemClicked="(label) => ClickedOnBreadcrumb(label)">
    <BreadcrumbItem Label="Item 1"></BreadcrumbItem>
    <BreadcrumbItem Label="Item 2"></BreadcrumbItem>
</Breadcrumb>
```

## Button

```html
<Button>Test Button</Button>
```

## Icon Button

```html
<IconButton Icon="info"></IconButton>
```

## Category filter

```html
<CategoryFilter 
    @ref="categoryFilter" 
    Id="category-filter-1" 
    Placeholder="Filter by"
    RepeatCategories="false"
    FilterChangedEvent="FilterStateChanged"
    InputChangedEvent="InputStateChanged">
</CategoryFilter>
```

```csharp
CategoryFilter categoryFilter;
Dictionary<string, Category> categoriesDict;
FilterState filterState;

protected override void OnAfterRender(bool firstRender)
    {
        if(firstRender)
        {
            categoriesDict = new();
            categoriesDict.Add("ID_1", new Category()
            {
                Label = "Vendor",
                Options = new string[]
                {
                    "Apple", "MS", "Siemens"
                }
            });

            filterState = new()
            {
                Tokens = new string[]
                {
                    "Custom filter text"
                },
                Categories = new FilterStateCategory[]
                {
                    new FilterStateCategory()
                    {
                        Id = "ID_1",
                        Value = "IBM",
                        Operator = "Not Equal"
                    }
                }
            };

            categoryFilter.Categories = categoriesDict;
            categoryFilter.FilterState = filterState;
        }
    }
```

## ECharts

```html
<ECharts Id="chart1" @ref="chart1">
</ECharts>
```

```csharp
ECharts chart1;

// Create the dynamic object
var dynamicObject = new Dictionary<string, object>();

// Create the tooltip object
var tooltip = new Dictionary<string, object>
{
    { "trigger", "axis" },
    { "axisPointer", new Dictionary<string, object> { { "type", "shadow" } } }
};
dynamicObject.Add("tooltip", tooltip);

// Create the legend object
dynamicObject.Add("legend", new Dictionary<string, object>());

// Create the grid object
var grid = new Dictionary<string, object>
{
    { "left", "3%" },
    { "right", "4%" },
    { "bottom", "3%" },
    { "containLabel", true }
};
dynamicObject.Add("grid", grid);

// Create the xAxis object
var xAxis = new List<Dictionary<string, object>>
{
    new Dictionary<string, object>
    {
        { "type", "category" },
        { "data", new List<string> { "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" } }
    }
};
dynamicObject.Add("xAxis", xAxis);

// Create the yAxis object
var yAxis = new List<Dictionary<string, object>>
{
    new Dictionary<string, object> { { "type", "value" } }
};
dynamicObject.Add("yAxis", yAxis);

// Create the series object
var series = new List<Dictionary<string, object>>
{
    new Dictionary<string, object>
    {
        { "name", "Direct" },
        { "type", "bar" },
        { "stack", "Ad" },
        { "emphasis", new Dictionary<string, object> { { "focus", "series" } } },
        { "data", new List<int> { 320, 332, 301, 334, 390, 330, 320 } }
    },
    new Dictionary<string, object>
    {
        { "name", "Email" },
        { "type", "bar" },
        { "emphasis", new Dictionary<string, object> { { "focus", "series" } } },
        { "data", new List<int> { 120, 132, 101, 134, 90, 230, 210 } }
    },
    new Dictionary<string, object>
    {
        { "name", "Union Ads" },
        { "type", "bar" },
        { "emphasis", new Dictionary<string, object> { { "focus", "series" } } },
        { "data", new List<int> { 220, 182, 191, 234, 290, 330, 310 } }
    },
    // Add more series objects as needed
};
dynamicObject.Add("series", series);

chart1.InitialChart(object1);
```

## Checkbox

```html
<div style="margin-bottom: 1rem">
  <input type="checkbox" id="checkbox_01" />
  <label for="checkbox_01">Simple checkbox</label>
</div>

<div>
  <input type="checkbox" id="checkbox_02" disabled />
  <label for="checkbox_02">Disabled checkbox</label>
</div>
```

## Chip

```html
<Chip Icon="print" 
      Label="Chip with icon" 
      Id="chip1" 
      Closable="true" 
      ClosedEvent="@ChipClosedEventHandler">
</Chip>
```

## Date picker

```html
<DatePicker From="2023/02/01" 
            To="2023/02/15" 
            Id="timepicker1" 
            DateChangeEvent="(date) => DateChangeEventTest(date)">
</DatePicker>
```

## Date time picker

```html
<DateTimePicker 
        DateChangeEvent="(date) => DateChangeEventTest(date)" 
        From="2023/02/01" 
        To="2023/02/15" 
        Id="datetimepicker1"
        TimeChangeEvent="(date) => DateChangeEventTest(date)">
</DateTimePicker>
```

## Divider

```html
<Divider></Divider>
```


## Drawer

```html
<Button ClickEvent="DrawerButtonClicked">Drawer Button</Button>
<Drawer @ref="drawer1" Id="drawer1">
    <span>Some content of drawer</span>
</Drawer>
```

```csharp
Drawer drawer1;

protected override void OnAfterRender(bool firstRender)
{
    if(firstRender)
    {
        drawer1.FullHeight = true;
        drawer1.CloseOnClickOutside = true;
    }
}

private void DrawerButtonClicked()
{
    drawer1.Show = !drawer1.Show;
}
```

## Dropdown button

```html
<DropdownButton Label="Dropdown" Variant="Primary" Icon="checkboxes">
    <DropdownItem Label="Item 1" Value="1"></DropdownItem>
    <DropdownItem Label="Item 2" Value="2"></DropdownItem>
    <DropdownItem Label="Item 3" Value="3"></DropdownItem>
</DropdownButton>
```

## Dropdown

```html
<Button Id="triggerId">Open</Button>
<Dropdown Trigger="triggerId">
  <DropdownItem Label="Item 1"></DropdownItem>
  <DropdownItem Label="Item 2"></DropdownItem>
  <DropdownItem Label="Item 3"></DropdownItem>
</Dropdown>
```

## Event list

```html
<EventList>
    <EventListItem Id="event-list-item-1" Label="Item 1" ItemCLickEvent="(label) => DropdownButtonClicked(label)"></EventListItem>
    <EventListItem Id="event-list-item-2" Label="Item 2" ItemCLickEvent="(label) => DropdownButtonClicked(label)"></EventListItem>
    <EventListItem Id="event-list-item-3" Label="Item 3" ItemCLickEvent="(label) => DropdownButtonClicked(label)"></EventListItem>
</EventList>
```

## Expanding search

```html
<ExpandingSearch Id="exp-search" 
                 ValueChangedEvent="(value) => SearchValueChanged(value)">
</ExpandingSearch>
```

## Flip

```html
<FlipTile>
    <div slot="header">Flip header</div>

    <div slot="footer">
      <div>Predicted maintenance date</div>
      <div class="d-flex align-items-center">
        <ix-icon name="info" size="16"></ix-icon>2021-06-22
      </div>
    </div>

    <FlipTileContent> Example 1 </FlipTileContent>
    <FlipTileContent> Example 2 </FlipTileContent>
</FlipTile>
```

- [ ] AG grid
## Group

```html
<Group Id="group1" Header="Header text" SubHeader="Subheader text">
    <GroupItem Id="groupitem1" Text="Example text 1"></GroupItem>
    <GroupItem Id="groupitem2" Text="Example text 2"></GroupItem>
    <GroupItem Id="groupitem3" Text="Example text 3" SelectedChangeEvent="GroupItemSelectedChanged"></GroupItem>
</Group>
```

## HTML table

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## Input

```html
<form class="needs-validation m-2">
  <input
    class="form-control"
    defaultValue="Some example text"
    placeholder="Enter text here"
    type="text"
  />
</form>
```

## KPI

```html
<KPI Label="Motor speed" Value="Nominal"></KPI>
```

## Message bar

```html
<MessageBar ClosedChangeEvent="MessageboxClosed" Id="messagebar1" Type="MessageBarType.Danger">
    <div class="d-flex align-items-center justify-content-between">
        Message text <ix-button>Action</ix-button>
    </div>
</MessageBar>
```

## Modal

```html
<div class="@modalClass" style="display:@modalDisplay">
    <div class="modal-header">
        Message headline
        <IconButton
            Ghost="true"
            Icon="close"
            Class="dismiss-modal"
            ClickEvent="() => CloseModal()"
        ></IconButton>
    </div>
    <div class="modal-body">Message text lorem ipsum</div>
    <div class="modal-footer">
        <Button Outline="true" 
                Class="dismiss-modal"
                ClickEvent="() => CloseModal()"> 
             Cancel 
        </Button>
        <Button ClickEvent="() => CloseModal()" 
                Class="close-modal">
             OK
        </Button>
    </div>
</div>
```

```csharp
string modalClass = "";
string modalDisplay = "none;";

private void OpenModal()
{
    modalDisplay = "block;";
    modalClass = "show";
}

private void CloseModal()
{
    modalDisplay = "none;";
    modalClass = "";
}
```

## Pagination

```html
<Pagination Id="pagination-1" 
    Advanced="true" 
    Count="100" 
    ItemCountChangedEvent="PaginationItemCountChanged" 
    PageSelectedEvent="PaginationPageSelected">
</Pagination>
```

## Pill

```html
<Pill Variant="PillVariant.Custom" Color="white" Background="purple">
    Label
</Pill>
```

## Radio button

```html
<div class="example-list">
  <input checked id="checkbox_1_1" name="group_1" type="radio" />
  <label for="checkbox_1_1"> Checked </label>

  <input id="checkbox_1_2" name="group_1" type="radio" />
  <label for="checkbox_1_2"> Normal </label>

  <input disabled id="checkbox_1_3" name="group_1" type="radio" />
  <label for="checkbox_1_3"> Disabled </label>
</div>
```

## Select

```html
<Select ItemSelectionChangeEvent=SelectItemSelectedChanged 
AddItemEvent="SelectItemAdded" Mode="SelectMode.Single" SelectedIndices="2" Id="select1">
    <SelectItem Id="selectItem1" Label="Item 1" Value="1"></SelectItem>
    <SelectItem Id="selectItem2" Label="Item 2" Value="2"></SelectItem>
</Select>
```

## Spinner

```html
<Spinner></Spinner>
```

## Split button

```html
<SplitButton Id="split-button-1" 
             Label="Split Button" 
             SplitIcon="chevron-down-small" 
             ButtonClickedEvent="SplitButtonClicked">
</SplitButton>
```

## Tabs

```html
<div class="example">
    <Tabs Id="tabs-demo">
        <ix-tab-item data-tab-id="0">Tab 1</ix-tab-item>
        <ix-tab-item data-tab-id="1">Tab 2</ix-tab-item>
        <ix-tab-item data-tab-id="2">Tab 3</ix-tab-item>
    </Tabs>
    <div data-tab-content="0" class="show">Content Tab 1</div>
    <div data-tab-content="1">Content Tab 2</div>
    <div data-tab-content="2">Content Tab 3</div>
</div>
```

```css
.example {
    display: block;
    position: relative;
    width: 100%;
}

div[data-tab-content] {
    display: none;
}

div[data-tab-content].show {
    display: block;
}
```

## Text area

```html
<textarea class="form-control" placeholder="Enter text here"></textarea>
```

## Tile

```html
<Tile Size="TileSize.Medium" Class="mr-1">
    <div slot="header">Tile header</div>
    <div class="text-l">92.8 �C</div>
</Tile>
```

## Time picker

```html
<TimePicker></TimePicker>
```

## Toast

```html
<Toast @ref="toast"></Toast>
```

```csharp
private Toast toast;

ToastConfig config = new ToastConfig()
{
    Message = "Test message",
    Type = "info"
}

toast.ShowToast("test message", "info");
```

## Toggle

```html
<Toggle></Toggle>
```

## Tooltip

```html
<div style="padding: 4rem">
    <Button DataTooltip="myTooltip">Hover me</Button>
    <ix-tooltip for="[data-tooltip='myTooltip']">
        Some example content
    </ix-tooltip>
</div>
```

## Tree

```html
<div style="height: 8rem; width: 100%">
    <Tree Id="tree-1" Root="root" ContextChangedEvent="TreeContextChangeEvent" 
    NodeClickedEvent="TreeNodeClicked" 
    NodeRemovedEvent="NodeRemoved" 
    NodeToggledEvent="TreeNodeToggled"  
    @ref="tree"></Tree>
</div>
```

```csharp
Tree tree;

Dictionary<string, TreeNode> treeNodes = new();

treeNodes.Add("root", new TreeNode()
{
    Id = "root",
    HasChildren = true,
    Children = new List<string>(){"sample"}
});

treeNodes.Add("sample", new TreeNode()
{
    Id = "sample",
    Data = new TreeData()
    {
        Name = "Sample"  
    },
    HasChildren = true,
    Children = new List<string>(){"sample-child-1", "sample-child-2"}
});

treeNodes.Add("sample-child-1", new TreeNode()
{
    Id = "sample-child-1",
    Data = new TreeData()
    {
        Name = "Sample Child 1"
    },
    HasChildren = false,
    Children = new List<string>() {}
});

treeNodes.Add("sample-child-2", new TreeNode()
    {
        Id = "sample-child-2",
        Data = new TreeData()
        {
            Name = "Sample Child 2"
        },
        HasChildren = false,
        Children = new List<string>() { }
    });


tree.TreeModel = treeNodes;
```

## Upload

```html
<Upload Id="file-upload-test" 
        FileChangedEvent="(data) => FileChanged(data)">
</Upload>
```

## Form validation

```html
<form class="row g-3 needs-validation" novalidate>
  <div class="row">
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">
        First name
      </label>
      <input
        type="text"
        class="form-control"
        id="validationCustom01"
        value=""
        required
      />
      <div class="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <ix-validation-tooltip message="Cannot be empty!">
        <label for="validationCustom02" class="form-label">
          Last name
        </label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          value=""
          required
        />
      </ix-validation-tooltip>
      <div class="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <label for="validationCustomUsername" class="form-label">
        Username
      </label>
      <input
        type="text"
        class="form-control"
        id="validationCustomUsername"
        aria-describedby="inputGroupPrepend"
        required
        minlength="4"
      />
      <div class="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
```

## Workflow

```html
<WorkflowSteps Id="wf-steps" StepSelectedEvent="(index) => WfSelectedEvent(index)">
    <WorkflowStep Status="WorkflowStatus.Done">Step 1</WorkflowStep>
    <WorkflowStep Status="WorkflowStatus.Success">Step 2</WorkflowStep>
    <WorkflowStep Status="WorkflowStatus.Open">Step 3</WorkflowStep>
    <WorkflowStep Status="WorkflowStatus.Warning">Step 4</WorkflowStep>
    <WorkflowStep Status="WorkflowStatus.Error">Step 5</WorkflowStep>
    <WorkflowStep Disabled="true">Step 6</WorkflowStep>
</WorkflowSteps>
```

### Usage

You can follow the original documentation and use native `Javascript` components.

```html
<ix-button class="m-1" outline variant="Secondary">
    Button
</ix-button>
```

Or you can use supported components as a native `Blazor` components.

```html
<Button Class="m-1" Outline="true" Variant="Secondary">
    Button
</Button>
```

If you want to use native `siemens-ix` html elements, you have to handle events over `javascript interops`. 
