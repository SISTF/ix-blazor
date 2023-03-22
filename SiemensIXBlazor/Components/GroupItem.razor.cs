﻿using Microsoft.AspNetCore.Components;

namespace SiemensIXBlazor.Components
{
    public partial class GroupItem
    {
        [Parameter, EditorRequired]
        public string Id { get; set; } = string.Empty;
        [Parameter]
        public bool Focusable { get; set; } = true;
        [Parameter]
        public string? Icon { get; set; }
        [Parameter]
        public int? Index { get; set; }
        [Parameter]
        public string? SecondaryText { get; set; }
        [Parameter]
        public bool? Selected { get; set; }
        [Parameter]
        public bool SuppressSelection { get; set; } = false;
        [Parameter]
        public string? Text { get; set; }
        [Parameter]
        public EventCallback<string> SelectedChangeEvent { get; set; }

        private async void ItemClicked()
        {
           await SelectedChangeEvent.InvokeAsync(Id);
        }

    }
}
