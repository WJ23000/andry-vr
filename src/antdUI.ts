import Vue from "vue";
import {
  message,
  // notification,
  // Affix,
  // Anchor,
  // AutoComplete,
  // Alert,
  Avatar,
  BackTop,
  Badge,
  // Breadcrumb,
  Button,
  // Calendar,
  // Card,
  Collapse,
  Carousel,
  // Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  // Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  // Layout,
  // List,
  // LocaleProvider,
  Menu,
  // Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  // Rate,
  Row,
  Select,
  Slider,
  Spin,
  // Statistic,
  Steps,
  // Switch,
  Table,
  // Transfer,
  Tree,
  // TreeSelect,
  Tabs,
  Tag,
  // TimePicker,
  Timeline,
  Tooltip,
  Upload,
  // Drawer,
  // Skeleton,
  // Comment,
  // ColorPicker,
  ConfigProvider,
  // Empty,
  // Result,
  // Descriptions,
  // PageHeader
} from "ant-design-vue";

message.config({
  top: `100px`,
  maxCount: 1,
});

Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;

export default function antdUI() {
  Vue.use(Divider);
  Vue.use(ConfigProvider);
  Vue.use(Tabs);
  Vue.use(FormModel);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Dropdown);
  Vue.use(Select);
  Vue.use(Checkbox);
  Vue.use(Button);
  Vue.use(Modal);
  Vue.use(Pagination);
  Vue.use(Popover);
  Vue.use(Avatar);
  Vue.use(Badge);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Menu);
  Vue.use(Progress);
  Vue.use(Timeline);
  Vue.use(Tooltip);
  Vue.use(Steps);
  Vue.use(Table);
  Vue.use(Popconfirm);
  Vue.use(Upload);
  Vue.use(DatePicker);
  Vue.use(Tag);
  Vue.use(Spin);
  Vue.use(Tree);
  Vue.use(Radio);
  Vue.use(Collapse);
  Vue.use(Slider);
  Vue.use(Select);
  Vue.use(Carousel);
  Vue.use(BackTop);
}
