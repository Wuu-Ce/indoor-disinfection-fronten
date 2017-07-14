<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Bootstrap</h1>
        </div>
        <div class="wrapper-md">
            <div class="row">
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">Dropdown</div>
                        <div class="panel-body">
                            <v-dropdown class="btn-group" b-class="btn-default">
                                <span slot="title">Default</span>
                                <ul class="dropdown-menu" slot="content">
                                    <li>
                                        <a href="javascript:void(0)">Action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Another action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Something else here</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="javascript:void(0)">Separated link</a>
                                    </li>
                                </ul>
                            </v-dropdown>
                            <v-dropdown class="btn-group" b-class="btn-primary">
                                <span slot="title">Primary</span>
                                <ul class="dropdown-menu" slot="content">
                                    <li>
                                        <a href="javascript:void(0)">Action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Another action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Something else here</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="javascript:void(0)">Separated link</a>
                                    </li>
                                </ul>
                            </v-dropdown>
                            <v-dropdown class="btn-group" b-class="btn-success">
                                <span slot="title">Success</span>
                                <ul class="dropdown-menu" slot="content">
                                    <li>
                                        <a href="javascript:void(0)">Action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Another action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Something else here</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="javascript:void(0)">Separated link</a>
                                    </li>
                                </ul>
                            </v-dropdown>
                            <v-dropdown class="btn-group" b-class="btn-info">
                                <span slot="title">Info</span>
                                <ul class="dropdown-menu" slot="content">
                                    <li>
                                        <a href="javascript:void(0)">Action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Another action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Something else here</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="javascript:void(0)">Separated link</a>
                                    </li>
                                </ul>
                            </v-dropdown>
                            <v-dropdown class="btn-group" b-class="btn-warning">
                                <span slot="title">Warning</span>
                                <ul class="dropdown-menu" slot="content">
                                    <li>
                                        <a href="javascript:void(0)">Action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Another action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Something else here</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="javascript:void(0)">Separated link</a>
                                    </li>
                                </ul>
                            </v-dropdown>
                            <v-dropdown class="btn-group" b-class="btn-danger">
                                <span slot="title">Danger</span>
                                <ul class="dropdown-menu" slot="content">
                                    <li>
                                        <a href="javascript:void(0)">Action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Another action</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Something else here</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="javascript:void(0)">Separated link</a>
                                    </li>
                                </ul>
                            </v-dropdown>
                            <div class="m-t">
                                <v-dropdown class="btn-group" b-class="btn-default" b-division="true">
                                    <span slot="title">Default</span>
                                    <ul class="dropdown-menu" slot="content">
                                        <li>
                                            <a href="javascript:void(0)">Action</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Another action</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Something else here</a>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <a href="javascript:void(0)">Separated link</a>
                                        </li>
                                    </ul>
                                </v-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">Tab</div>
                        <div class="panel-body">

                            <div class="tab-container">
                                <ul class="nav nav-tabs">
                                  <li class="active"><a href="#">Home</a></li>
                                  <li><a href="#">Profile</a></li>
                                  <li><a href="#">Messages</a></li>
                                </ul>
                                <div class="tab-content">
                                    sdf
                                </div>
                            </div>

                            <div class="tab-container">
                                <v-tab :data-tab="['tab1','tab2','tab3']"></v-tab>
                                <div class="tab-content">
                                    <div>tab1</div>
                                    <div>tab2</div>
                                    <div>tab3</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Dropdown from '../bootstrap/Dropdown'

export default {
    name: "bootstrap",
    components:{
        "v-dropdown":Dropdown
    }
}
</script>