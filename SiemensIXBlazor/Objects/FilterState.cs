﻿// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Newtonsoft.Json;

namespace SiemensIXBlazor.Objects
{
    public class FilterState
    {
        [JsonProperty("tokens")]
        public string[]? Tokens { get; set; }
        [JsonProperty("categories")]
        public FilterStateCategory[]? Categories { get; set; }
    }
}
