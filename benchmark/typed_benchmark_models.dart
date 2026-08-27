import 'package:localpocket/typed.dart';

final class BenchmarkWidgets extends StoreDef<BenchmarkWidgets> {
  BenchmarkWidgets._() : super(name: 'widgets', version: 1);

  static final BenchmarkWidgets instance = BenchmarkWidgets._();

  late final _name = schema.text('name').req();
  late final _qty = schema.integer('qty');
  late final _phone = schema.text('phone', uniqueWhenActive: true);
  late final _body = schema.text('body');

  static TextFieldReq<BenchmarkWidgets> get widgetName => instance._name;
  static IntFieldOpt<BenchmarkWidgets> get qty => instance._qty;
  static TextFieldOpt<BenchmarkWidgets> get phone => instance._phone;
  static TextFieldOpt<BenchmarkWidgets> get body => instance._body;

  @override
  List<FieldDef<BenchmarkWidgets, Object?>> get fields => [
        _name,
        _qty,
        _phone,
        _body,
      ];

  @override
  List<IndexSpec> get indexes => [
        indexSpec(<FieldDef<BenchmarkWidgets, Object?>>[_name, _qty]),
        indexSpec([_qty]),
      ];
}
