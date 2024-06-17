var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZonasdeConservacinCONAVI_2 = new ol.format.GeoJSON();
var features_ZonasdeConservacinCONAVI_2 = format_ZonasdeConservacinCONAVI_2.readFeatures(json_ZonasdeConservacinCONAVI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeConservacinCONAVI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeConservacinCONAVI_2.addFeatures(features_ZonasdeConservacinCONAVI_2);
var lyr_ZonasdeConservacinCONAVI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasdeConservacinCONAVI_2, 
                style: style_ZonasdeConservacinCONAVI_2,
                popuplayertitle: "Zonas de Conservación CONAVI",
                interactive: true,
    title: 'Zonas de Conservación CONAVI<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_0.png" /> 1-1<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_1.png" /> 1-2<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_2.png" /> 1-3<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_3.png" /> 1-4<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_4.png" /> 1-5<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_5.png" /> 1-6<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_6.png" /> 1-7<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_7.png" /> 1-8<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_8.png" /> 1-9<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_9.png" /> 2-1<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_10.png" /> 2-2<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_11.png" /> 2-3<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_12.png" /> 2-4<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_13.png" /> 3-1<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_14.png" /> 3-2<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_15.png" /> 4-1<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_16.png" /> 4-2<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_17.png" /> 4-3<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_18.png" /> 5-1<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_19.png" /> 5-2<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_20.png" /> 6-1<br />\
    <img src="styles/legend/ZonasdeConservacinCONAVI_2_21.png" /> 6-2<br />'
        });
var format_Lmitecantonal_3 = new ol.format.GeoJSON();
var features_Lmitecantonal_3 = format_Lmitecantonal_3.readFeatures(json_Lmitecantonal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitecantonal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitecantonal_3.addFeatures(features_Lmitecantonal_3);
var lyr_Lmitecantonal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmitecantonal_3, 
                style: style_Lmitecantonal_3,
                popuplayertitle: "Límite cantonal",
                interactive: true,
                title: '<img src="styles/legend/Lmitecantonal_3.png" /> Límite cantonal'
            });
var format_Lmiteprovincial_4 = new ol.format.GeoJSON();
var features_Lmiteprovincial_4 = format_Lmiteprovincial_4.readFeatures(json_Lmiteprovincial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmiteprovincial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmiteprovincial_4.addFeatures(features_Lmiteprovincial_4);
var lyr_Lmiteprovincial_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmiteprovincial_4, 
                style: style_Lmiteprovincial_4,
                popuplayertitle: "Límite provincial",
                interactive: true,
                title: '<img src="styles/legend/Lmiteprovincial_4.png" /> Límite provincial'
            });
var format_reasSilvestresProtegidas_5 = new ol.format.GeoJSON();
var features_reasSilvestresProtegidas_5 = format_reasSilvestresProtegidas_5.readFeatures(json_reasSilvestresProtegidas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasSilvestresProtegidas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasSilvestresProtegidas_5.addFeatures(features_reasSilvestresProtegidas_5);
var lyr_reasSilvestresProtegidas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasSilvestresProtegidas_5, 
                style: style_reasSilvestresProtegidas_5,
                popuplayertitle: "Áreas Silvestres Protegidas",
                interactive: true,
    title: 'Áreas Silvestres Protegidas<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_0.png" /> Otras<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_1.png" /> Finca del Estado FE<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_2.png" /> Humedal HH<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_3.png" /> Parque Nacional PN<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_4.png" /> Reserva Biológica RB<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_5.png" /> Reserva Forestal RF<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_6.png" /> Reserva Natural Absoluta RNA<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_7.png" /> Refugio Nacional de Vida Silvestre RVS<br />\
    <img src="styles/legend/reasSilvestresProtegidas_5_8.png" /> Zona Protectora ZP<br />'
        });
var format_Territoriosindgenas_6 = new ol.format.GeoJSON();
var features_Territoriosindgenas_6 = format_Territoriosindgenas_6.readFeatures(json_Territoriosindgenas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territoriosindgenas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Territoriosindgenas_6.addFeatures(features_Territoriosindgenas_6);
var lyr_Territoriosindgenas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Territoriosindgenas_6, 
                style: style_Territoriosindgenas_6,
                popuplayertitle: "Territorios indígenas",
                interactive: true,
    title: 'Territorios indígenas<br />\
    <img src="styles/legend/Territoriosindgenas_6_0.png" /> BORUCA<br />\
    <img src="styles/legend/Territoriosindgenas_6_1.png" /> BRIBRI<br />\
    <img src="styles/legend/Territoriosindgenas_6_2.png" /> CABECAR<br />\
    <img src="styles/legend/Territoriosindgenas_6_3.png" /> CHOROTEGA<br />\
    <img src="styles/legend/Territoriosindgenas_6_4.png" /> GUAYMI<br />\
    <img src="styles/legend/Territoriosindgenas_6_5.png" /> HUETAR<br />\
    <img src="styles/legend/Territoriosindgenas_6_6.png" /> MALEKUS<br />\
    <img src="styles/legend/Territoriosindgenas_6_7.png" /> NGÖBES<br />\
    <img src="styles/legend/Territoriosindgenas_6_8.png" /> TERRABA<br />'
        });
var format_Redvialnacionalestratgica_7 = new ol.format.GeoJSON();
var features_Redvialnacionalestratgica_7 = format_Redvialnacionalestratgica_7.readFeatures(json_Redvialnacionalestratgica_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacionalestratgica_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacionalestratgica_7.addFeatures(features_Redvialnacionalestratgica_7);
var lyr_Redvialnacionalestratgica_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redvialnacionalestratgica_7, 
                style: style_Redvialnacionalestratgica_7,
                popuplayertitle: "Red vial nacional estratégica",
                interactive: true,
    title: 'Red vial nacional estratégica<br />\
    <img src="styles/legend/Redvialnacionalestratgica_7_0.png" /> Conectores de Integración Territorial<br />\
    <img src="styles/legend/Redvialnacionalestratgica_7_1.png" /> Distribuidores Regionales<br />\
    <img src="styles/legend/Redvialnacionalestratgica_7_2.png" /> Red Básica de Accesso<br />\
    <img src="styles/legend/Redvialnacionalestratgica_7_3.png" /> Red de Alta Capacidad<br />\
    <img src="styles/legend/Redvialnacionalestratgica_7_4.png" /> Ruta Travesía<br />'
        });
var format_Redvialnacional_8 = new ol.format.GeoJSON();
var features_Redvialnacional_8 = format_Redvialnacional_8.readFeatures(json_Redvialnacional_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacional_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacional_8.addFeatures(features_Redvialnacional_8);
var lyr_Redvialnacional_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redvialnacional_8, 
                style: style_Redvialnacional_8,
                popuplayertitle: "Red vial nacional",
                interactive: true,
    title: 'Red vial nacional<br />\
    <img src="styles/legend/Redvialnacional_8_0.png" /> Primaria<br />\
    <img src="styles/legend/Redvialnacional_8_1.png" /> Secundaria<br />\
    <img src="styles/legend/Redvialnacional_8_2.png" /> Terciaria<br />\
    <img src="styles/legend/Redvialnacional_8_3.png" /> Ruta Travesía<br />'
        });
var format_ProyectosPROERICONAVI_9 = new ol.format.GeoJSON();
var features_ProyectosPROERICONAVI_9 = format_ProyectosPROERICONAVI_9.readFeatures(json_ProyectosPROERICONAVI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosPROERICONAVI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosPROERICONAVI_9.addFeatures(features_ProyectosPROERICONAVI_9);
var lyr_ProyectosPROERICONAVI_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectosPROERICONAVI_9, 
                style: style_ProyectosPROERICONAVI_9,
                popuplayertitle: "Proyectos PROERI CONAVI",
                interactive: true,
    title: 'Proyectos PROERI CONAVI<br />\
    <img src="styles/legend/ProyectosPROERICONAVI_9_0.png" /> Carretera<br />\
    <img src="styles/legend/ProyectosPROERICONAVI_9_1.png" /> Puente<br />'
        });
var format_PROERIIEtapa_10 = new ol.format.GeoJSON();
var features_PROERIIEtapa_10 = format_PROERIIEtapa_10.readFeatures(json_PROERIIEtapa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROERIIEtapa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROERIIEtapa_10.addFeatures(features_PROERIIEtapa_10);
var lyr_PROERIIEtapa_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROERIIEtapa_10, 
                style: style_PROERIIEtapa_10,
                popuplayertitle: "PROERI I Etapa",
                interactive: true,
    title: 'PROERI I Etapa<br />\
    <img src="styles/legend/PROERIIEtapa_10_0.png" /> Estabilización<br />\
    <img src="styles/legend/PROERIIEtapa_10_1.png" /> Puente<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ZonasdeConservacinCONAVI_2.setVisible(false);lyr_Lmitecantonal_3.setVisible(false);lyr_Lmiteprovincial_4.setVisible(false);lyr_reasSilvestresProtegidas_5.setVisible(false);lyr_Territoriosindgenas_6.setVisible(false);lyr_Redvialnacionalestratgica_7.setVisible(false);lyr_Redvialnacional_8.setVisible(true);lyr_ProyectosPROERICONAVI_9.setVisible(true);lyr_PROERIIEtapa_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_ZonasdeConservacinCONAVI_2,lyr_Lmitecantonal_3,lyr_Lmiteprovincial_4,lyr_reasSilvestresProtegidas_5,lyr_Territoriosindgenas_6,lyr_Redvialnacionalestratgica_7,lyr_Redvialnacional_8,lyr_ProyectosPROERICONAVI_9,lyr_PROERIIEtapa_10];
lyr_ZonasdeConservacinCONAVI_2.set('fieldAliases', {'Zona': 'Zona', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Zona2': 'Zona2', 'Nombre': 'Nombre', 'REgiones': 'REgiones', });
lyr_Lmitecantonal_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CÓDIGO_CA': 'CÓDIGO_CA', 'CANTÓN': 'CANTÓN', });
lyr_Lmiteprovincial_4.set('fieldAliases', {'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_PR': 'CÓDIGO_PR', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL': 'ORIGEN_DEL', 'ÁREA': 'ÁREA', 'VERSIÓN': 'VERSIÓN', 'GLOBALID': 'GLOBALID', });
lyr_reasSilvestresProtegidas_5.set('fieldAliases', {'CODIGO': 'CODIGO', 'NUM_AREA': 'NUM_AREA', 'AREA_CONS': 'AREA_CONS', 'CATEGORIA': 'CATEGORIA', 'NOMBRE_': 'NOMBRE_', 'AREA_HA': 'AREA_HA', });
lyr_Territoriosindgenas_6.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'AREA_OFI': 'AREA_OFI', 'PUEBLO': 'PUEBLO', 'POBLACIóN': 'POBLACIóN', 'DECR_CREAC': 'DECR_CREAC', 'DECRE_DELI': 'DECRE_DELI', 'HOJA_CARTG': 'HOJA_CARTG', 'POBLADOS': 'POBLADOS', 'REPRE_LEGA': 'REPRE_LEGA', });
lyr_Redvialnacionalestratgica_7.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_Redvialnacional_8.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_ProyectosPROERICONAVI_9.set('fieldAliases', {'ID': 'ID', 'Nombre': 'Nombre', 'Riesgo Det': 'Riesgo Det', 'Long': 'Long', 'Lat': 'Lat', 'Ruta': 'Ruta', 'Tipo': 'Tipo', 'Provincia': 'Provincia', 'Cantón': 'Cantón', 'Distrito': 'Distrito', });
lyr_PROERIIEtapa_10.set('fieldAliases', {'ID': 'ID', 'Nombre': 'Nombre', 'Riesgo': 'Riesgo', 'Intervensión': 'Intervensión', 'Condición': 'Condición', 'Estado': 'Estado', 'Equipo': 'Equipo', 'Provincia': 'Provincia', 'Cantón': 'Cantón', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Ruta': 'Ruta', 'Monto': 'Monto', 'Tipo': 'Tipo', 'Waze': 'Waze', 'Google': 'Google', });
lyr_ZonasdeConservacinCONAVI_2.set('fieldImages', {'Zona': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Zona2': 'TextEdit', 'Nombre': 'TextEdit', 'REgiones': 'Hidden', });
lyr_Lmitecantonal_3.set('fieldImages', {'OBJECTID': 'Hidden', 'CÓDIGO_CA': 'Hidden', 'CANTÓN': 'TextEdit', });
lyr_Lmiteprovincial_4.set('fieldImages', {'gml_id': 'Hidden', 'OBJECTID': 'Hidden', 'CÓDIGO': 'Hidden', 'CÓDIGO_PR': 'Hidden', 'PROVINCIA': 'TextEdit', 'ORIGEN_DEL': 'Hidden', 'ÁREA': 'Hidden', 'VERSIÓN': 'Hidden', 'GLOBALID': 'Hidden', });
lyr_reasSilvestresProtegidas_5.set('fieldImages', {'CODIGO': 'Hidden', 'NUM_AREA': 'Hidden', 'AREA_CONS': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOMBRE_': 'TextEdit', 'AREA_HA': 'Hidden', });
lyr_Territoriosindgenas_6.set('fieldImages', {'NOMBRE': 'TextEdit', 'AREA_OFI': 'Hidden', 'PUEBLO': 'TextEdit', 'POBLACIóN': 'Hidden', 'DECR_CREAC': 'Hidden', 'DECRE_DELI': 'Hidden', 'HOJA_CARTG': 'Hidden', 'POBLADOS': 'Hidden', 'REPRE_LEGA': 'TextEdit', });
lyr_Redvialnacionalestratgica_7.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'TextEdit', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_Redvialnacional_8.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'Hidden', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_ProyectosPROERICONAVI_9.set('fieldImages', {'ID': 'Hidden', 'Nombre': 'TextEdit', 'Riesgo Det': 'TextEdit', 'Long': 'Hidden', 'Lat': 'Hidden', 'Ruta': 'TextEdit', 'Tipo': 'TextEdit', 'Provincia': 'TextEdit', 'Cantón': 'TextEdit', 'Distrito': 'Hidden', });
lyr_PROERIIEtapa_10.set('fieldImages', {'ID': 'Hidden', 'Nombre': 'TextEdit', 'Riesgo': 'Hidden', 'Intervensión': 'Hidden', 'Condición': 'TextEdit', 'Estado': 'Hidden', 'Equipo': 'Hidden', 'Provincia': 'TextEdit', 'Cantón': 'TextEdit', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Ruta': 'Range', 'Monto': 'Hidden', 'Tipo': 'TextEdit', 'Waze': 'TextEdit', 'Google': 'TextEdit', });
lyr_ZonasdeConservacinCONAVI_2.set('fieldLabels', {'Zona2': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_Lmitecantonal_3.set('fieldLabels', {'CANTÓN': 'inline label - visible with data', });
lyr_Lmiteprovincial_4.set('fieldLabels', {'PROVINCIA': 'inline label - visible with data', });
lyr_reasSilvestresProtegidas_5.set('fieldLabels', {'AREA_CONS': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'NOMBRE_': 'inline label - visible with data', });
lyr_Territoriosindgenas_6.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'PUEBLO': 'inline label - visible with data', 'REPRE_LEGA': 'inline label - visible with data', });
lyr_Redvialnacionalestratgica_7.set('fieldLabels', {'RUTA': 'inline label - visible with data', 'Rve_Descri': 'inline label - always visible', });
lyr_Redvialnacional_8.set('fieldLabels', {'RUTA': 'inline label - visible with data', });
lyr_ProyectosPROERICONAVI_9.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Riesgo Det': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Cantón': 'inline label - visible with data', });
lyr_PROERIIEtapa_10.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Condición': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Cantón': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Waze': 'inline label - visible with data', 'Google': 'inline label - visible with data', });
lyr_PROERIIEtapa_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});