<template>
  <div>
    <div class="bg-light lter b-b wrapper-md">
      <h1 class="m-n font-thin h3">客厅</h1>
    </div>
    <div class="wrapper-md">
      <div class="row">
        <div class="col-sm-10">
          <div class="panel panel-default">
            <div class="panel-heading">
              <span class="label bg-danger pull-right m-t-xs">4 left</span> 环境参数
            </div>
            <table class="table table-striped m-b-none">
              <thead>
              <tr>
                <th>值</th>
                <th>项目</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div class="progress progress-sm progress-striped active m-t-xs m-b-none">
                    <div class="progress-bar bg-success" data-toggle="tooltip" data-original-title="80%" style="width: 80%"></div>
                  </div>
                </td>
                <td>温度</td>
              </tr>
              <tr>
                <td>
                  <div class="progress progress-xs m-t-xs m-b-none">
                    <div class="progress-bar bg-info" data-toggle="tooltip" data-original-title="40%" style="width: 40%"></div>
                  </div>
                </td>
                <td>湿度</td>
              </tr>
              <tr>
                <td>
                  <div class="progress progress-xs m-t-xs m-b-none">
                    <div class="progress-bar bg-warning" data-toggle="tooltip" data-original-title="20%" style="width: 20%"></div>
                  </div>
                </td>
                <td>PM2.5</td>
              </tr>
              <tr>
                <td>
                  <div class="progress progress-xs m-t-xs m-b-none">
                    <div class="progress-bar bg-danger" data-toggle="tooltip" data-original-title="15%" style="width: 15%"></div>
                  </div>
                </td>
                <td>气压</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading">Stats</div>
            <table class="table table-striped m-b-none">
              <thead>
                <tr>
                  <th>Item</th>
                  <th style="width:70px;"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>App downloads</td>
                  <td class="text-success">
                    <i class="fa fa-level-up"></i> 40%
                  </td>
                </tr>
                <tr>
                  <td>Social connection</td>
                  <td class="text-success">
                    <i class="fa fa-level-up"></i> 20%
                  </td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td class="text-warning">
                    <i class="fa fa-level-down"></i> 5%
                  </td>
                </tr>
                <tr>
                  <td>Customer increase</td>
                  <td class="text-danger">
                    <i class="fa fa-level-down"></i> 20%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          Responsive Table
        </div>
        <div class="row wrapper">
          <div class="col-sm-5 m-b-xs">
            <select class="input-sm form-control w-sm inline v-middle">
              <option value="0">Bulk action</option>
              <option value="1">Delete selected</option>
              <option value="2">Bulk edit</option>
              <option value="3">Export</option>
            </select>
            <button class="btn btn-sm btn-default">Apply</button>
          </div>
          <div class="col-sm-4">
          </div>
          <div class="col-sm-3">
            <div class="input-group">
              <input type="text" class="input-sm form-control" placeholder="Search">
              <span class="input-group-btn">
            <button class="btn btn-sm btn-default" type="button">Go!</button>
          </span>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-striped b-t b-light">
            <thead>
              <tr>
                <th style="width:20px;">
                  <label class="i-checks m-b-none">
                    <input type="checkbox"><i></i>
                  </label>
                </th>
                <th>Project</th>
                <th>Task</th>
                <th>Date</th>
                <th style="width:30px;"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Idrawfast</td>
                <td>4c</td>
                <td>Jul 25, 2013</td>
                <td>
                  <a href class="active" ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Formasa</td>
                <td>8c</td>
                <td>Jul 22, 2013</td>
                <td>
                  <a href ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Avatar system</td>
                <td>15c</td>
                <td>Jul 15, 2013</td>
                <td>
                  <a href class="active" ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Throwdown</td>
                <td>4c</td>
                <td>Jul 11, 2013</td>
                <td>
                  <a href class="active" ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Idrawfast</td>
                <td>4c</td>
                <td>Jul 7, 2013</td>
                <td>
                  <a href class="active" ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Formasa</td>
                <td>8c</td>
                <td>Jul 3, 2013</td>
                <td>
                  <a href class="active" ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Avatar system</td>
                <td>15c</td>
                <td>Jul 2, 2013</td>
                <td>
                  <a href class="active" ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="i-checks m-b-none">
                    <input type="checkbox" name="post[]"><i></i></label>
                </td>
                <td>Videodown</td>
                <td>4c</td>
                <td>Jul 1, 2013</td>
                <td>
                  <a href class="active" ui-toggle-class><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer class="panel-footer">
          <div class="row">
            <div class="col-sm-4 hidden-xs">
              <select class="input-sm form-control w-sm inline v-middle">
                <option value="0">Bulk action</option>
                <option value="1">Delete selected</option>
                <option value="2">Bulk edit</option>
                <option value="3">Export</option>
              </select>
              <button class="btn btn-sm btn-default">Apply</button>
            </div>
            <div class="col-sm-4 text-center">
              <small class="text-muted inline m-t-sm m-b-sm">showing 20-30 of 50 items</small>
            </div>
            <div class="col-sm-4 text-right text-center-xs">
              <ul class="pagination pagination-sm m-t-none m-b-none">
                <li><a href><i class="fa fa-chevron-left"></i></a></li>
                <li><a href>1</a></li>
                <li><a href>2</a></li>
                <li><a href>3</a></li>
                <li><a href>4</a></li>
                <li><a href>5</a></li>
                <li><a href><i class="fa fa-chevron-right"></i></a></li>
              </ul>
            </div>
          </div>
        </footer> -->
      </div>
    </div>
  </div>
</template>
