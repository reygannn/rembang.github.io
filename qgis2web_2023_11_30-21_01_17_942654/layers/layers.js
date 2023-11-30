var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASI_LN_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_2 = format_ADMINISTRASI_LN_25K_2.readFeatures(json_ADMINISTRASI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_2.addFeatures(features_ADMINISTRASI_LN_25K_2);
var lyr_ADMINISTRASI_LN_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_2, 
                style: style_ADMINISTRASI_LN_25K_2,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_2.png" /> ADMINISTRASI_LN_25K'
            });
var format_AGRIKEBUN_AR_25K_3 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_25K_3 = format_AGRIKEBUN_AR_25K_3.readFeatures(json_AGRIKEBUN_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_25K_3.addFeatures(features_AGRIKEBUN_AR_25K_3);
var lyr_AGRIKEBUN_AR_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRIKEBUN_AR_25K_3, 
                style: style_AGRIKEBUN_AR_25K_3,
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_25K_3.png" /> AGRIKEBUN_AR_25K'
            });
var format_SUNGAI_LN_25K_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_4 = format_SUNGAI_LN_25K_4.readFeatures(json_SUNGAI_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_4.addFeatures(features_SUNGAI_LN_25K_4);
var lyr_SUNGAI_LN_25K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_25K_4, 
                style: style_SUNGAI_LN_25K_4,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_4.png" /> SUNGAI_LN_25K'
            });
var format_AGRILADANG_AR_25K_5 = new ol.format.GeoJSON();
var features_AGRILADANG_AR_25K_5 = format_AGRILADANG_AR_25K_5.readFeatures(json_AGRILADANG_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRILADANG_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRILADANG_AR_25K_5.addFeatures(features_AGRILADANG_AR_25K_5);
var lyr_AGRILADANG_AR_25K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRILADANG_AR_25K_5, 
                style: style_AGRILADANG_AR_25K_5,
                interactive: true,
                title: '<img src="styles/legend/AGRILADANG_AR_25K_5.png" /> AGRILADANG_AR_25K'
            });
var format_AGRISAWAH_AR_25K_6 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_6 = format_AGRISAWAH_AR_25K_6.readFeatures(json_AGRISAWAH_AR_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_6.addFeatures(features_AGRISAWAH_AR_25K_6);
var lyr_AGRISAWAH_AR_25K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRISAWAH_AR_25K_6, 
                style: style_AGRISAWAH_AR_25K_6,
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_6.png" /> AGRISAWAH_AR_25K'
            });
var format_AGRITANAMCAMPUR_AR_25K_7 = new ol.format.GeoJSON();
var features_AGRITANAMCAMPUR_AR_25K_7 = format_AGRITANAMCAMPUR_AR_25K_7.readFeatures(json_AGRITANAMCAMPUR_AR_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRITANAMCAMPUR_AR_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRITANAMCAMPUR_AR_25K_7.addFeatures(features_AGRITANAMCAMPUR_AR_25K_7);
var lyr_AGRITANAMCAMPUR_AR_25K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRITANAMCAMPUR_AR_25K_7, 
                style: style_AGRITANAMCAMPUR_AR_25K_7,
                interactive: true,
                title: '<img src="styles/legend/AGRITANAMCAMPUR_AR_25K_7.png" /> AGRITANAMCAMPUR_AR_25K'
            });
var format_DANAU_AR_25K_8 = new ol.format.GeoJSON();
var features_DANAU_AR_25K_8 = format_DANAU_AR_25K_8.readFeatures(json_DANAU_AR_25K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_25K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_25K_8.addFeatures(features_DANAU_AR_25K_8);
var lyr_DANAU_AR_25K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_25K_8, 
                style: style_DANAU_AR_25K_8,
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_25K_8.png" /> DANAU_AR_25K'
            });
var format_JALAN_LN_25K_9 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_9 = format_JALAN_LN_25K_9.readFeatures(json_JALAN_LN_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_9.addFeatures(features_JALAN_LN_25K_9);
var lyr_JALAN_LN_25K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_9, 
                style: style_JALAN_LN_25K_9,
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_9.png" /> JALAN_LN_25K'
            });
var format_RAWA_AR_25K_10 = new ol.format.GeoJSON();
var features_RAWA_AR_25K_10 = format_RAWA_AR_25K_10.readFeatures(json_RAWA_AR_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAWA_AR_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAWA_AR_25K_10.addFeatures(features_RAWA_AR_25K_10);
var lyr_RAWA_AR_25K_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAWA_AR_25K_10, 
                style: style_RAWA_AR_25K_10,
                interactive: true,
                title: '<img src="styles/legend/RAWA_AR_25K_10.png" /> RAWA_AR_25K'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ADMINISTRASI_LN_25K_2.setVisible(true);lyr_AGRIKEBUN_AR_25K_3.setVisible(true);lyr_SUNGAI_LN_25K_4.setVisible(true);lyr_AGRILADANG_AR_25K_5.setVisible(true);lyr_AGRISAWAH_AR_25K_6.setVisible(true);lyr_AGRITANAMCAMPUR_AR_25K_7.setVisible(true);lyr_DANAU_AR_25K_8.setVisible(true);lyr_JALAN_LN_25K_9.setVisible(true);lyr_RAWA_AR_25K_10.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_GoogleSatellite_1,lyr_ADMINISTRASI_LN_25K_2,lyr_AGRIKEBUN_AR_25K_3,lyr_SUNGAI_LN_25K_4,lyr_AGRILADANG_AR_25K_5,lyr_AGRISAWAH_AR_25K_6,lyr_AGRITANAMCAMPUR_AR_25K_7,lyr_DANAU_AR_25K_8,lyr_JALAN_LN_25K_9,lyr_RAWA_AR_25K_10];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AGRIKEBUN_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AGRILADANG_AR_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRITANAMCAMPUR_AR_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'FCODE': 'FCODE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSWH': 'JNSSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_AR_25K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_9.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RAWA_AR_25K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPRAWA': 'TPRAWA', 'TPGNGN': 'TPGNGN', 'TPAIR': 'TPAIR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_AGRIKEBUN_AR_25K_3.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AGRILADANG_AR_25K_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRISAWAH_AR_25K_6.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRITANAMCAMPUR_AR_25K_7.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'FCODE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_DANAU_AR_25K_8.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JALAN_LN_25K_9.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_RAWA_AR_25K_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPRAWA': '', 'TPGNGN': '', 'TPAIR': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AGRIKEBUN_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AGRILADANG_AR_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRISAWAH_AR_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRITANAMCAMPUR_AR_25K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'FCODE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_AR_25K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_9.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RAWA_AR_25K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPRAWA': 'no label', 'TPGNGN': 'no label', 'TPAIR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RAWA_AR_25K_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});